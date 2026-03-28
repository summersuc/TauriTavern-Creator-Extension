<script setup lang="ts">
import { computed } from 'vue';
import FactStrip, { type FactStripItem } from '../../../components/FactStrip.vue';
import type { WorldInfoActivationEntry } from '../../../host/api';
import type { WorldInfoFeatureController } from '../module';
import { useI18n } from '../../../i18n';

type WorldGroup = {
    world: string;
    entries: WorldInfoActivationEntry[];
    activatedCount: number;
    constantCount: number;
};

const props = defineProps<{
    controller: WorldInfoFeatureController;
}>();

const { t } = useI18n();

const positionLabels: Record<string, string> = {
    before: 'Before Prompt',
    after: 'After Prompt',
    an_top: 'AN Top',
    an_bottom: 'AN Bottom',
    depth: 'Depth',
    em_top: 'EM Top',
    em_bottom: 'EM Bottom',
    outlet: 'Outlet',
};

const summary = computed(() => {
    const entries = props.controller.state.lastBatch?.entries ?? [];

    return {
        total: entries.length,
        constant: entries.filter((entry) => entry.constant).length,
        activated: entries.filter((entry) => !entry.constant).length,
        worlds: new Set(entries.map((entry) => entry.world)).size,
    };
});

const batchFacts = computed<FactStripItem[]>(() => {
    const batch = props.controller.state.lastBatch;
    if (!batch) {
        return [];
    }

    return [
        { label: t('worldInfo.factTrigger'), value: batch.trigger },
        { label: t('worldInfo.factCaptured'), value: formatBatchTime(batch.timestampMs), monospace: true },
        { label: t('worldInfo.factEntries'), value: summary.value.total },
        { label: t('worldInfo.factWorldbooks'), value: summary.value.worlds },
        { label: t('worldInfo.factConstant'), value: summary.value.constant, tone: 'blue' },
        { label: t('worldInfo.factTriggered'), value: summary.value.activated, tone: 'green' },
    ];
});

const groupedWorlds = computed<WorldGroup[]>(() => {
    const entries = props.controller.state.lastBatch?.entries ?? [];
    const groups = new Map<string, WorldGroup>();

    for (const entry of entries) {
        let group = groups.get(entry.world);
        if (!group) {
            group = {
                world: entry.world,
                entries: [],
                activatedCount: 0,
                constantCount: 0,
            };
            groups.set(entry.world, group);
        }

        group.entries.push(entry);
        if (entry.constant) {
            group.constantCount += 1;
        } else {
            group.activatedCount += 1;
        }
    }

    return Array.from(groups.values()).map((group) => ({
        ...group,
        entries: group.entries.slice().sort((left, right) => Number(right.constant) - Number(left.constant)),
    }));
});

const formatBatchTime = (timestampMs: number) => new Date(timestampMs).toLocaleString([], {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

const getPositionLabel = (position?: string) => position ? (positionLabels[position] ?? position) : 'Default';
</script>

<template>
  <div class="worldinfo-view">
    <div class="view-header">
      <div>
        <h2 class="view-title">{{ t('worldInfo.title') }}</h2>
        <p class="view-desc">
          {{ t('worldInfo.description') }}
        </p>
      </div>

      <div class="legend">
        <span class="legend-chip">
          <span class="legend-dot constant"></span>
          <span>{{ t('worldInfo.legendConstant') }}</span>
        </span>
        <span class="legend-chip">
          <span class="legend-dot activated"></span>
          <span>{{ t('worldInfo.legendActivated') }}</span>
        </span>
      </div>
    </div>

    <div v-if="!props.controller.state.lastBatch" class="empty-state">
      {{ t('worldInfo.emptyNoBatch') }}
    </div>

    <div v-else class="batch-layout">
      <FactStrip :items="batchFacts" />

      <div v-if="summary.total === 0" class="empty-state compact">
        {{ t('worldInfo.emptyNoEntries') }}
      </div>

      <div v-else class="world-groups">
        <section v-for="group in groupedWorlds" :key="group.world" class="world-group">
          <header class="group-header">
            <div>
              <h3>{{ group.world }}</h3>
              <p>{{ t('worldInfo.groupStats', { entries: group.entries.length, constant: group.constantCount, activated: group.activatedCount }) }}</p>
            </div>
          </header>

          <div class="entry-list">
            <button
              v-for="entry in group.entries"
              :key="`${entry.world}-${entry.uid}`"
              type="button"
              class="entry-card"
              @click="void props.controller.openEntry(entry.world, entry.uid)"
            >
              <div class="entry-main">
                <span class="entry-dot" :class="{ constant: entry.constant, activated: !entry.constant }"></span>
                <div class="entry-copy">
                  <div class="entry-name">{{ entry.displayName }}</div>
                  <div class="entry-meta">UID {{ entry.uid }} · {{ getPositionLabel(entry.position) }}</div>
                </div>
              </div>
              <span class="entry-badge" :class="{ constant: entry.constant, activated: !entry.constant }">
                {{ entry.constant ? t('worldInfo.badgeConstant') : t('worldInfo.badgeActivated') }}
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.worldinfo-view {
    display: flex;
    flex-direction: column;
    gap: 18px;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding-right: 2px;
    color: var(--ttce-text);
}

.view-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: flex-start;
}

.view-title {
    margin: 0 0 6px;
    font-size: 20px;
}

.view-desc {
    margin: 0;
    max-width: 64ch;
    color: var(--ttce-text-muted);
    font-size: 13px;
    line-height: 1.5;
}

.legend {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
}

.legend-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border: 1px solid var(--ttce-border);
    border-radius: 999px;
    background: var(--ttce-bg-1);
    color: var(--ttce-text-muted);
    font-size: 12px;
}

.legend-dot,
.entry-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
}

.legend-dot.constant,
.entry-dot.constant {
    background: var(--ttce-accent-blue);
}

.legend-dot.activated,
.entry-dot.activated {
    background: var(--ttce-accent-green);
}

.batch-layout {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.world-groups {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.world-group {
    border: 1px solid var(--ttce-border);
    border-radius: 8px;
    background: var(--ttce-bg-1);
    overflow: hidden;
}

.group-header {
    padding: 14px 16px;
    border-bottom: 1px solid var(--ttce-border);
    background: var(--ttce-bg-2);
}

.group-header h3 {
    margin: 0 0 4px;
    font-size: 15px;
}

.group-header p {
    margin: 0;
    color: var(--ttce-text-muted);
    font-size: 12px;
}

.entry-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px;
}

.entry-card {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--ttce-border);
    border-radius: 8px;
    background: var(--ttce-bg-1);
    color: var(--ttce-text);
    cursor: pointer;
    text-align: left;
    transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}

.entry-card:hover {
    background: var(--ttce-surface-hover);
    border-color: var(--ttce-border-strong);
    transform: translateY(-1px);
}

.entry-main {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
}

.entry-copy {
    min-width: 0;
}

.entry-name {
    font-size: 14px;
    font-weight: 600;
    overflow-wrap: anywhere;
}

.entry-meta {
    margin-top: 4px;
    color: var(--ttce-text-muted);
    font-size: 12px;
}

.entry-badge {
    padding: 4px 9px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
}

.entry-badge.constant {
    background: var(--ttce-accent-blue-soft-bg);
    color: var(--ttce-accent-blue-soft-text);
}

.entry-badge.activated {
    background: var(--ttce-accent-green-soft-bg);
    color: var(--ttce-accent-green-soft-text);
}

.empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 1px dashed var(--ttce-border);
    border-radius: 8px;
    background: var(--ttce-bg-1);
    color: var(--ttce-text-muted);
    font-size: 13px;
}

.empty-state.compact {
    min-height: 120px;
}

@media (max-width: 960px) {
    .view-header {
        flex-direction: column;
    }

    .entry-card {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
