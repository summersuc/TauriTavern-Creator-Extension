import { reactive } from 'vue';
import type { CreatorFeatureController, CreatorFeatureModule } from '../types';
import type { CreatorRuntimeContext } from '../../app/context';
import type { HostUnsubscribe, WorldInfoActivationBatch } from '../../host/api';
import WorldInfoFeed from './components/WorldInfoFeed.vue';

const WORLD_INFO_FEATURE_ID = 'world-info-tools';

export interface WorldInfoFeatureController extends CreatorFeatureController {
    state: {
        lastBatch: WorldInfoActivationBatch | null;
    };
    openEntry(world: string, uid: string | number): Promise<void>;
}



function createBatchChips(batch: WorldInfoActivationBatch) {
    return batch.entries.map((entry) => ({
        label: entry.displayName,
        tone: entry.constant ? 'world-info-constant' as const : 'world-info' as const,
    }));
}

function createWorldInfoFeatureController(
    context: CreatorRuntimeContext,
): WorldInfoFeatureController {
    const state = reactive({
        lastBatch: null as WorldInfoActivationBatch | null,
    });

    let unsubscribe: HostUnsubscribe | null = null;

    return {
        state,
        async activate() {
            const worldInfoApi = context.host.api.worldInfo!;

            state.lastBatch = await worldInfoApi.getLastActivation();
            unsubscribe = await worldInfoApi.subscribeActivations((batch) => {
                state.lastBatch = batch;
                if (!batch.entries.length) {
                    return;
                }

                const worlds = new Set(batch.entries.map((e) => e.world));
                context.bubbleBus.push({
                    source: 'world-info',
                    level: 'info',
                    title: context.i18n.t('worldInfo.bubbleTitle', { n: batch.entries.length }),
                    message: context.i18n.t('worldInfo.bubbleMessage', { trigger: batch.trigger, n: worlds.size }),
                    chips: createBatchChips(batch),
                    panelTabId: WORLD_INFO_FEATURE_ID,
                    meta: { trigger: batch.trigger },
                });
            });
        },
        async deactivate() {
            await unsubscribe?.();
            unsubscribe = null;
        },
        async openEntry(world, uid) {
            await context.host.api.worldInfo!.openEntry({ world, uid });
            context.shell.closePanel();
        },
    };
}

export const worldInfoFeatureModule: CreatorFeatureModule = {
    id: WORLD_INFO_FEATURE_ID,
    area: 'character-tools',
    titleKey: 'worldInfo.title',
    descriptionKey: 'worldInfo.featureDesc',
    order: 10,
    capabilities: ['worldInfo'],
    defaultEnabled: true,
    component: WorldInfoFeed,
    createController: createWorldInfoFeatureController,
};
