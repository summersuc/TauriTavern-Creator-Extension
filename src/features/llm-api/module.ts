import { reactive } from 'vue';
import type { CreatorFeatureController, CreatorFeatureModule } from '../types';
import type { CreatorRuntimeContext } from '../../app/context';
import type {
    HostUnsubscribe,
    LlmApiLogIndexEntry,
    LlmApiLogPreview,
    LlmApiLogRaw,
} from '../../host/api';
import LlmApiViewer from './components/LlmApiViewer.vue';

export interface LlmApiFeatureController extends CreatorFeatureController {
    state: {
        logs: LlmApiLogIndexEntry[];
        selectedId: number | null;
        selectedPreview: LlmApiLogPreview | null;
        selectedRaw: LlmApiLogRaw | null;
        viewMode: 'preview' | 'raw';
        keepLimit: number;
        loadingIndex: boolean;
        loadingPreview: boolean;
        loadingRaw: boolean;
    };
    reloadIndex(): Promise<void>;
    reloadSelection(): Promise<void>;
    selectLog(id: number): Promise<void>;
    setViewMode(mode: 'preview' | 'raw'): Promise<void>;
    setKeepLimit(value: number): Promise<void>;
}

function createLlmApiFeatureController(context: CreatorRuntimeContext): LlmApiFeatureController {
    const state = reactive({
        logs: [] as LlmApiLogIndexEntry[],
        selectedId: null as number | null,
        selectedPreview: null as LlmApiLogPreview | null,
        selectedRaw: null as LlmApiLogRaw | null,
        viewMode: 'preview' as 'preview' | 'raw',
        keepLimit: 20,
        loadingIndex: false,
        loadingPreview: false,
        loadingRaw: false,
    });

    let unsubscribe: HostUnsubscribe | null = null;
    const previewCache = new Map<number, LlmApiLogPreview>();
    const rawCache = new Map<number, LlmApiLogRaw>();
    const llmApiLogs = context.host.api.dev!.llmApiLogs!;

    const clearSelection = () => {
        state.selectedId = null;
        state.selectedPreview = null;
        state.selectedRaw = null;
    };

    const loadPreview = async (id: number, force = false) => {
        try {
            if (!force) {
                const cached = previewCache.get(id);
                if (cached) {
                    state.selectedPreview = cached;
                    return;
                }
            }

            state.loadingPreview = true;
            const preview = await llmApiLogs.getPreview(id);
            previewCache.set(id, preview);

            if (state.selectedId === id) {
                state.selectedPreview = preview;
            }
        } finally {
            state.loadingPreview = false;
        }
    };

    const loadRaw = async (id: number, force = false) => {
        try {
            if (!force) {
                const cached = rawCache.get(id);
                if (cached) {
                    state.selectedRaw = cached;
                    return;
                }
            }

            state.loadingRaw = true;
            const raw = await llmApiLogs.getRaw(id);
            rawCache.set(id, raw);

            if (state.selectedId === id) {
                state.selectedRaw = raw;
            }
        } finally {
            state.loadingRaw = false;
        }
    };

    const ensureSelectionStillExists = () => {
        if (state.selectedId === null) {
            return;
        }

        const selectedExists = state.logs.some((entry) => entry.id === state.selectedId);
        if (selectedExists) {
            return;
        }

        const fallback = state.logs[0];
        if (!fallback) {
            clearSelection();
            return;
        }

        state.selectedId = fallback.id;
        state.selectedPreview = previewCache.get(fallback.id) ?? null;
        state.selectedRaw = rawCache.get(fallback.id) ?? null;
        void loadPreview(fallback.id);
        if (state.viewMode === 'raw') {
            void loadRaw(fallback.id);
        }
    };

    const reloadIndex = async (preserveSelection = true) => {
        try {
            state.loadingIndex = true;
            state.logs = await llmApiLogs.index({ limit: state.keepLimit });
        } finally {
            state.loadingIndex = false;
        }

        if (!state.logs.length) {
            clearSelection();
            return;
        }

        const nextSelectedId = preserveSelection
            && state.selectedId !== null
            && state.logs.some((entry) => entry.id === state.selectedId)
            ? state.selectedId
            : state.logs[0].id;

        await selectLog(nextSelectedId);
    };

    const selectLog = async (id: number) => {
        state.selectedId = id;
        state.selectedPreview = previewCache.get(id) ?? null;
        state.selectedRaw = rawCache.get(id) ?? null;

        await loadPreview(id);
        if (state.viewMode === 'raw') {
            await loadRaw(id);
        }
    };

    return {
        state,
        async activate() {
            state.keepLimit = await llmApiLogs.getKeep();
            await reloadIndex(false);

            unsubscribe = await llmApiLogs.subscribeIndex((entry) => {
                const wasFollowingLatest = state.selectedId === null || state.selectedId === state.logs[0]?.id;
                state.logs.unshift(entry);
                if (state.logs.length > state.keepLimit) {
                    state.logs.pop();
                }

                if (wasFollowingLatest) {
                    void selectLog(entry.id);
                    return;
                }

                ensureSelectionStillExists();
            });
        },
        async deactivate() {
            await unsubscribe?.();
            unsubscribe = null;
        },
        async reloadIndex() {
            await reloadIndex();
        },
        async reloadSelection() {
            if (state.selectedId === null) {
                return;
            }

            previewCache.delete(state.selectedId);
            rawCache.delete(state.selectedId);
            state.selectedPreview = null;
            state.selectedRaw = null;
            await loadPreview(state.selectedId, true);
            if (state.viewMode === 'raw') {
                await loadRaw(state.selectedId, true);
            }
        },
        async selectLog(id) {
            await selectLog(id);
        },
        async setViewMode(mode) {
            state.viewMode = mode;
            if (state.selectedId === null) {
                return;
            }

            if (mode === 'raw') {
                await loadRaw(state.selectedId);
                return;
            }

            await loadPreview(state.selectedId);
        },
        async setKeepLimit(value) {
            await llmApiLogs.setKeep(value);
            state.keepLimit = value;
            await reloadIndex();
        },
    };
}

export const llmApiFeatureModule: CreatorFeatureModule = {
    id: 'llm-api-tools',
    area: 'character-tools',
    titleKey: 'llmApi.title',
    descriptionKey: 'llmApi.featureDesc',
    order: 20,
    capabilities: ['dev.llmApiLogs'],
    defaultEnabled: true,
    component: LlmApiViewer,
    createController: createLlmApiFeatureController,
};
