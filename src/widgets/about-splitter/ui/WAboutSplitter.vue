<template>
  <WAboutSplitterMobile v-if="isTablet || isMobile" />
  <WAboutSplitterDesktop v-else />
</template>

<script lang="ts" setup>
import { useScreenSize } from '@shared/lib/composables';

import WAboutSplitterDesktop from './WAboutSplitterDesktop.vue';
import WAboutSplitterMobile from './WAboutSplitterMobile.vue';

const { isTablet, isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
