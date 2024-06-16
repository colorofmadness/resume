<template>
  <div
    :style="{
      '--card-background': `color-mix(in srgb, var(--background), var(--primary) ${color?.split('-')[1]}%)`
    }"
    class="card"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';

import { defaultProps, ICardProps } from './types';

defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs();
withDefaults(defineProps<ICardProps>(), defaultProps);
</script>

<style lang="scss" scoped src="./v-card.scss" />
