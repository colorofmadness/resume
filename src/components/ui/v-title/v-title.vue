<template>
  <component :is="is" :class="[$style['title'], $style[`title--${color}`]]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { defaultProps, type ITitleProps } from './types';

withDefaults(defineProps<ITitleProps>(), defaultProps);
</script>

<style lang="postcss" module src="./v-title.module.pcss" />
