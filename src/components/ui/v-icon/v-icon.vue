<template>
  <svg :height="size" :style="styles" :width="size" aria-hidden="true" class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import IIconProps from '@ui/v-icon/types';

const props = withDefaults(defineProps<IIconProps>(), {
  size: '16'
});

const styles = computed(() => ({
  minWidth: `${props.size}px`,
  minHeight: `${props.size}px`
}));
</script>

<style lang="scss" scoped src="./v-icon.scss" />
