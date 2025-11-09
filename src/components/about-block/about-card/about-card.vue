<template>
  <div ref="target" :class="$style['wrapper']" :style="!isMobile ? style : null">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDraggable, useParentElement } from '@vueuse/core';
import { useScreenSize } from '@composables';

import IAboutCardProps from '@components/about-block/about-card/types';

const props = defineProps<IAboutCardProps>();

const target = ref<HTMLDivElement | null>(null);
const containerElement = useParentElement();
const { isMobile } = useScreenSize();

const { style } = useDraggable(target, {
  containerElement,
  ...props.options,
  disabled: isMobile.value
});
</script>

<style lang="postcss" module src="./about-card.module.pcss" />
