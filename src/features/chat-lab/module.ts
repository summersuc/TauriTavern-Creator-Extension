import { reactive } from 'vue';
import type { CreatorFeatureController, CreatorFeatureModule } from '../types';
import type { CreatorRuntimeContext } from '../../app/context';
import type { ChatLocateResult, ChatSearchHit, ChatWindowInfo } from '../../host/api';
import ChatLab from './components/ChatLab.vue';

type ChatLabResult = ChatLocateResult | ChatSearchHit[] | { message: string } | null;
export type ChatRoleFilter = 'any' | 'user' | 'assistant' | 'system';

export interface ChatLabFeatureController extends CreatorFeatureController {
    state: {
        extraKeysInput: string;
        locateRole: ChatRoleFilter;
        searchQuery: string;
        searchRole: ChatRoleFilter;
        searchLimit: number;
        searchResult: ChatLabResult;
        viewMode: 'pretty' | 'raw';
        isLoading: boolean;
        errorMessage: string | null;
        windowInfo: ChatWindowInfo | null;
    };
    refreshWindowInfo(): Promise<void>;
    executeFindLast(): Promise<void>;
    executeSearch(): Promise<void>;
}

function isMissingActiveChatContext(error: unknown) {
    if (!(error instanceof Error)) {
        return false;
    }

    return [
        'Failed to resolve active character id',
        'SillyTavern context chatId is empty for character chat',
        'SillyTavern context chatId is empty for group chat',
    ].includes(error.message);
}

function createChatLabFeatureController(context: CreatorRuntimeContext): ChatLabFeatureController {
    const state = reactive({
        extraKeysInput: '',
        locateRole: 'any' as ChatRoleFilter,
        searchQuery: '',
        searchRole: 'any' as ChatRoleFilter,
        searchLimit: 20,
        searchResult: null as ChatLabResult,
        viewMode: 'pretty' as 'pretty' | 'raw',
        isLoading: false,
        errorMessage: null as string | null,
        windowInfo: null as ChatWindowInfo | null,
    });

    const clearResult = () => {
        state.searchResult = null;
        state.errorMessage = null;
    };

    const readWindowInfo = async () => {
        try {
            return await context.host.getChatWindowInfo();
        } catch (error) {
            if (isMissingActiveChatContext(error)) {
                return null;
            }

            throw error;
        }
    };

    const refreshWindowInfo = async () => {
        state.errorMessage = null;
        state.windowInfo = await readWindowInfo();
    };

    const requireWindowInfo = async () => {
        const windowInfo = await readWindowInfo();
        state.windowInfo = windowInfo;

        if (windowInfo) {
            return windowInfo;
        }

        throw new Error(context.i18n.t('chatLab.errorNoChat'));
    };

    return {
        state,
        async activate() {
            await refreshWindowInfo();
        },
        async deactivate() {},
        async refreshWindowInfo() {
            await refreshWindowInfo();
        },
        async executeFindLast() {
            state.isLoading = true;
            clearResult();

            try {
                await requireWindowInfo();

                const extraKeys = state.extraKeysInput
                    .split(',')
                    .map((value) => value.trim())
                    .filter(Boolean);

                const role = state.locateRole === 'any' ? undefined : state.locateRole;
                const result = await context.host.getChatHandle().locate.findLastMessage(
                    {
                        role,
                        hasExtraKeys: extraKeys.length > 0 ? extraKeys : undefined,
                    },
                );

                state.searchResult = result ?? { message: 'No result found' };
            } catch (error) {
                state.errorMessage = error instanceof Error ? error.message : String(error);
            } finally {
                state.isLoading = false;
            }
        },
        async executeSearch() {
            if (!state.searchQuery) {
                return;
            }

            state.isLoading = true;
            clearResult();

            try {
                await requireWindowInfo();

                const searchLimit = Number.isFinite(state.searchLimit) && state.searchLimit > 0
                    ? Math.floor(state.searchLimit)
                    : 20;

                const result = await context.host.getChatHandle().searchMessages({
                    query: state.searchQuery,
                    limit: searchLimit,
                    filters: {
                        role: state.searchRole === 'any' ? undefined : state.searchRole,
                    },
                });

                state.searchResult = result.length > 0 ? result : { message: 'No result found' };
            } catch (error) {
                state.errorMessage = error instanceof Error ? error.message : String(error);
            } finally {
                state.isLoading = false;
            }
        },
    };
}

export const chatLabFeatureModule: CreatorFeatureModule = {
    id: 'chat-lab',
    area: 'memory-dev',
    titleKey: 'chatLab.title',
    descriptionKey: 'chatLab.featureDesc',
    order: 40,
    capabilities: ['chat'],
    defaultEnabled: true,
    component: ChatLab,
    createController: createChatLabFeatureController,
};
