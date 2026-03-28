<script setup lang="ts">
import { computed } from 'vue';
import FloatingBubble from './shell/bubble/FloatingBubble.vue';
import MainPanel from './shell/panel/MainPanel.vue';
import { useCreatorApp } from './app/context';

const { shell } = useCreatorApp();
const isPanelOpen = computed(() => shell.state.panelOpen);
</script>

<template>
  <FloatingBubble />
  <Transition name="fade">
      <MainPanel v-if="isPanelOpen" />
  </Transition>
</template>

<style>
/* Global CSS injected into the host via Vite */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
