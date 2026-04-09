<template>
  <div
    :class="$style['card']"
    :style="{
      '--card-background': `color-mix(in srgb, var(--background), var(--primary) ${colorPercent}%)`
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { defaultProps, type ICardProps } from '../types';

const props = withDefaults(defineProps<ICardProps>(), defaultProps);

const colorPercent = computed(() => props.color?.split('-')[1] ?? '100');
</script>

<style lang="postcss" module src="../styles.module.pcss" />
