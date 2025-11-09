<template>
  <svg
    :class="$style.icon"
    :height="height ?? size"
    :style="computedStyles"
    :width="width ?? size"
    aria-hidden="true"
  >
    <use :xlink:href="`#${iconHash}`" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';

import IIconProps from './types';

const props = withDefaults(defineProps<IIconProps>(), {
  size: 24
});

const iconHash = ref('');

const computedStyles = computed(() => ({
  minWidth: `${props.width ?? props.size}px`,
  minHeight: `${props.height ?? props.size}px`
}));

async function getIcon() {
  try {
    const iconsImport: Record<string, any> = import.meta.glob('@/assets/icons/**/**.svg');

    const rawIcon = await iconsImport[`/src/assets/icons/${props.name}.svg`]();

    iconHash.value = rawIcon.default;
  } catch {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`);
  }
}

watchEffect(getIcon);
</script>

<style lang="postcss" module src="./v-icon.module.pcss" />
