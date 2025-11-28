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
import type { IButtonProps } from '../types';
import { defaultProps } from '../types';

withDefaults(defineProps<IButtonProps>(), defaultProps);
</script>

<style lang="postcss" module src="../style.module.pcss" />
