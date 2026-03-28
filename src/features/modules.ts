import { chatLabFeatureModule } from './chat-lab/module';
import { devLogsFeatureModule } from './dev-logs/module';
import { llmApiFeatureModule } from './llm-api/module';
import { worldInfoFeatureModule } from './world-info/module';

export const creatorFeatureModules = [
    worldInfoFeatureModule,
    llmApiFeatureModule,
    devLogsFeatureModule,
    chatLabFeatureModule,
];
