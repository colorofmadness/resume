<template>
  <div
    :class="$style['card']"
    :style="{
      '--card-background': `color-mix(in srgb, var(--background), var(--primary) ${color?.split('-')[1]}%)`
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>

import { defaultProps, type ICardProps } from '../types';

withDefaults(defineProps<ICardProps>(), defaultProps);
</script>

<style lang="postcss" module src="../styles.module.pcss" />
