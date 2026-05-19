<template>
  <div :class="[$style['about-splitter__layer'], $style[`about-splitter__layer--${variant}`]]">
    <div :class="$style['about-splitter__wrap']">
      <div :class="$style['about-splitter__box']">
        <div :class="$style['about-splitter__image']">
          <SImage :alt="alt" :src="image" />
        </div>
      </div>

      <div :class="$style['about-splitter__body']">
        <h1>{{ block.title }}</h1>
        <p>{{ block.text }}</p>
        <ul v-if="block.bullets?.length" :class="$style['about-splitter__bullets']">
          <li v-for="item of block.bullets" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SImage from '@shared/ui/image';

import type { AboutBlock } from '../model/content';

defineProps<{
  variant: 'top' | 'bottom';
  image: string;
  alt: string;
  block: AboutBlock;
}>();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
