<template>
  <figure class="v-image">
    <img :src="src" alt="" class="v-image__img" />
  </figure>
</template>

<script lang="ts" setup>
import { IImageProps } from './types';

defineProps<IImageProps>();
</script>

<style lang="scss" scoped src="./v-image.scss" />
