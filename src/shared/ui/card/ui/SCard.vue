<template>
  <div
    :class="$style['card']"
    :style="{
      '--card-background': `color-mix(in srgb, var(--background), var(--primary) ${color?.split('-')[1]}%)`
    }"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';

import type { ICardProps } from '../types';
import { defaultProps } from '../types';

defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs();
withDefaults(defineProps<ICardProps>(), defaultProps);
</script>

<style lang="postcss" module src="../SCard.module.pcss" />
