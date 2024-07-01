<template>
  <div ref="target" :style="style" class="wrapper">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDraggable, useParentElement } from '@vueuse/core';

import IAboutCardProps from '@components/about-block/about-card/types';

const props = defineProps<IAboutCardProps>();

const target = ref<HTMLDivElement | null>(null);
const containerElement = useParentElement();
const { style } = useDraggable(target, {
  containerElement,
  ...props.options
});
</script>

<style lang="scss" scoped src="./about-card.scss" />
