<template>
  <figure :class="$style['image']">
    <img :alt="alt" :class="$style['image__img']" :src="src" />
  </figure>
</template>

<script lang="ts" setup>
import type { IImageProps } from '../types';

defineProps<IImageProps>();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
