import { reactive } from 'vue';
import type { CreatorFeatureController, CreatorFeatureModule } from '../types';
import type { CreatorRuntimeContext } from '../../app/context';
import type { BackendLogEntry, FrontendLogEntry, HostUnsubscribe } from '../../host/api';
import DevLogsViewer from './components/DevLogsViewer.vue';

const DEV_LOGS_FEATURE_ID = 'dev-logs-tools';

export type DevLogsScope = 'frontend' | 'backend' | 'all';

export interface DevLogsFeatureController extends CreatorFeatureController {
    state: {
        frontendLogs: FrontendLogEntry[];
        backendLogs: BackendLogEntry[];
        frontendConsoleCaptureEnabled: boolean;
    };
    setFrontendConsoleCaptureEnabled(enabled: boolean): Promise<void>;
    clearLogs(scope: DevLogsScope): void;
}

function createDevLogsFeatureController(context: CreatorRuntimeContext): DevLogsFeatureController {
    const state = reactive({
        frontendLogs: [] as FrontendLogEntry[],
        backendLogs: [] as BackendLogEntry[],
        frontendConsoleCaptureEnabled: false,
    });

    let unsubscribeFrontend: HostUnsubscribe | null = null;
    let unsubscribeBackend: HostUnsubscribe | null = null;

    return {
        state,
        async activate() {
            const frontendLogs = context.host.api.dev!.frontendLogs!;
            const backendLogs = context.host.api.dev!.backendLogs!;

            state.frontendConsoleCaptureEnabled = await frontendLogs.getConsoleCaptureEnabled();
            state.frontendLogs = await frontendLogs.list({ limit: 100 });
            state.backendLogs = await backendLogs.tail({ limit: 100 });

            unsubscribeFrontend = await frontendLogs.subscribe((entry) => {
                state.frontendLogs.unshift(entry);
                if (state.frontendLogs.length > 500) {
                    state.frontendLogs.pop();
                }

                if (entry.level === 'warn' || entry.level === 'error') {
                    const titleKey = entry.level === 'error'
                        ? 'devLogs.bubbleFrontendError' as const
                        : 'devLogs.bubbleFrontendWarn' as const;
                    context.bubbleBus.push({
                        source: 'frontend-log',
                        level: entry.level,
                        title: context.i18n.t(titleKey),
                        message: entry.message,
                        panelTabId: DEV_LOGS_FEATURE_ID,
                    });
                }
            });

            unsubscribeBackend = await backendLogs.subscribe((entry) => {
                state.backendLogs.unshift(entry);
                if (state.backendLogs.length > 500) {
                    state.backendLogs.pop();
                }

                if (entry.level === 'WARN' || entry.level === 'ERROR') {
                    const titleKey = entry.level === 'ERROR'
                        ? 'devLogs.bubbleBackendError' as const
                        : 'devLogs.bubbleBackendWarn' as const;
                    context.bubbleBus.push({
                        source: 'backend-log',
                        level: entry.level === 'ERROR' ? 'error' : 'warn',
                        title: context.i18n.t(titleKey),
                        message: entry.message,
                        panelTabId: DEV_LOGS_FEATURE_ID,
                    });
                }
            });
        },
        async deactivate() {
            await unsubscribeFrontend?.();
            await unsubscribeBackend?.();
            unsubscribeFrontend = null;
            unsubscribeBackend = null;
        },
        async setFrontendConsoleCaptureEnabled(enabled) {
            const frontendLogs = context.host.api.dev!.frontendLogs!;
            await frontendLogs.setConsoleCaptureEnabled(enabled);
            state.frontendConsoleCaptureEnabled = enabled;
        },
        clearLogs(scope) {
            if (scope === 'frontend' || scope === 'all') {
                state.frontendLogs = [];
            }

            if (scope === 'backend' || scope === 'all') {
                state.backendLogs = [];
            }
        },
    };
}

export const devLogsFeatureModule: CreatorFeatureModule = {
    id: DEV_LOGS_FEATURE_ID,
    area: 'extension-dev',
    titleKey: 'devLogs.title',
    descriptionKey: 'devLogs.featureDesc',
    order: 30,
    capabilities: ['dev.frontendLogs', 'dev.backendLogs'],
    defaultEnabled: true,
    component: DevLogsViewer,
    createController: createDevLogsFeatureController,
};
