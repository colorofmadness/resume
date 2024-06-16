<template>
  <component :is="is" :class="['title', `title--${color}`]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { defaultProps, type ITitleProps } from './types';

withDefaults(defineProps<ITitleProps>(), defaultProps);
</script>

<style lang="scss" scoped src="./v-title.scss" />
