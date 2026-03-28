<script setup lang="ts">
export type FactTone = 'default' | 'blue' | 'green' | 'amber' | 'red';

export interface FactStripItem {
    label: string;
    value: string | number;
    tone?: FactTone;
    monospace?: boolean;
}

defineProps<{
    items: FactStripItem[];
}>();
</script>

<template>
  <div class="fact-strip">
    <div v-for="item in items" :key="`${item.label}:${item.value}`" class="fact-chip">
      <span class="fact-label">{{ item.label }}</span>
      <strong class="fact-value" :class="[item.tone ?? 'default', { monospace: item.monospace }]">
        {{ item.value }}
      </strong>
    </div>
  </div>
</template>

<style scoped>
.fact-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
}

.fact-chip {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    padding: 6px 10px;
    border: 1px solid var(--ttce-border);
    border-radius: 999px;
    background: var(--ttce-chip-bg);
}

.fact-label {
    color: var(--ttce-text-muted);
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
}

.fact-value {
    color: var(--ttce-text);
    font-size: 12px;
    font-weight: 600;
    min-width: 0;
    overflow-wrap: anywhere;
}

.fact-value.monospace {
    font-family: var(--ttce-font-mono);
}

.fact-value.blue {
    color: var(--ttce-accent-blue-soft-text);
}

.fact-value.green {
    color: var(--ttce-accent-green-soft-text);
}

.fact-value.amber {
    color: var(--ttce-accent-amber-soft-text);
}

.fact-value.red {
    color: var(--ttce-accent-red-soft-text);
}
</style>
