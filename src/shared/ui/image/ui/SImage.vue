<template>
  <figure :class="$style['image']" data-image>
    <img
      ref="img"
      :class="[$style['v-image__img'], { [$style['v-image__img--fullscreen']]: isFullscreen }]"
      :src="src"
      alt="img"
      @click="handleImageClick"
    />
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';

import { useScreenSize } from '@shared/lib/composables';

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

<style lang="postcss" module src="../SImage.module.pcss" />
