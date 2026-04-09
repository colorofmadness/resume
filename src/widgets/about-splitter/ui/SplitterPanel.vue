<template>
  <div
    :class="[$style['about-splitter__layer'], $style[`about-splitter__layer--${variant}`]]"
    :style="style"
  >
    <div :class="$style['about-splitter__wrap']">
      <div :class="$style['about-splitter__box']">
        <div :class="$style['about-splitter__image']">
          <SImage :src="image" :alt="alt" />
        </div>
      </div>

      <div :class="$style['about-splitter__body']">
        <h1>{{ block.title }}</h1>
        <p>{{ block.text }}</p>
        <ul v-if="block.bullets?.length" :class="$style['about-splitter__bullets']">
          <li v-for="item of block.bullets" :key="item">{{ item }}</li>
        </ul>
        <div v-if="block.pets?.length" :class="$style['about-splitter__pets']">
          <div v-for="pet in block.pets" :key="pet.name" :class="$style['about-splitter__pet']">
            <div :class="$style['about-splitter__pet-avatar']">
              <img v-if="pet.photo" :src="pet.photo" :alt="pet.name" />
              <span v-else>{{ pet.emoji }}</span>
            </div>
            <div :class="$style['about-splitter__pet-info']">
              <strong>{{ pet.name }}</strong>
              <span>{{ pet.breed }}</span>
              <p>{{ pet.fact }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue';

import SImage from '@shared/ui/image';

import type { AboutBlock } from '../model/content';

defineProps<{
  variant: 'top' | 'bottom';
  image: string;
  alt: string;
  block: AboutBlock;
  style?: StyleValue;
}>();
</script>

<style lang="postcss" module src="../style.module.pcss" />
