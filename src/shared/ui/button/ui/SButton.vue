<template>
  <button
    :class="[$style['btn'], { [$style['btn--disabled']]: disabled }]"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defaultProps, type IButtonProps } from '../types';

withDefaults(defineProps<IButtonProps>(), defaultProps);
</script>

<style lang="postcss" module src="../styles.module.pcss" />
