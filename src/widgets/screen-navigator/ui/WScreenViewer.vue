<template>
  <SScreen
    v-for="link of links"
    :id="link.id"
    :key="link.id"
    :is-active="isActive(link.id)"
    :style="link.style"
  >
    <Component :is="link.component" />
  </SScreen>
</template>

<script lang="ts" setup>
import SScreen from '@shared/ui/screen';

import type { IScreenViewerProps } from '../model/types';

const props = defineProps<IScreenViewerProps>();

const isActive = (id: string) => id === props.currentId && props.isOpen;
</script>

<style lang="postcss" module src="../styles.module.pcss" />