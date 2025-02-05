<template>
  <figure class="v-image">
    <img
      ref="img"
      :class="['v-image__img', { 'v-image__img--fullscreen': isFullscreen }]"
      :src="src"
      alt="img"
      @click="handleImageClick"
    />
  </figure>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';

import { IImageProps } from './types';

const props = defineProps<IImageProps>();

const img = ref<HTMLImageElement | null>(null);
const { isFullscreen, enter } = useFullscreen(img);

const handleImageClick = () => {
  if (props.useFullscreen) {
    enter();
  }
};
</script>

<style lang="scss" scoped src="./v-image.scss" />
