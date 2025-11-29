<template>
  <figure :class="$style['image']">
    <img
      ref="img"
      :class="[$style['image__img'], { [$style['image__img--fullscreen']]: isFullscreen }]"
      :src="src"
      alt="img"
      @click="handleImageClick"
    />
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';

import { useScreenSize } from '../../../lib/composables';
import type IImageProps from '../types';

const props = defineProps<IImageProps>();

const img = ref<HTMLImageElement | null>(null);
const { isFullscreen, enter } = useFullscreen(img);
const { isMobile } = useScreenSize();

const handleImageClick = () => {
  if (props.useFullscreen && !isMobile.value) {
    enter();
  }
};
</script>

<style lang="postcss" module src="../styles.module.pcss" />
