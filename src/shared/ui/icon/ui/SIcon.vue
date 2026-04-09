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

import type { IIconProps } from '../types';

const props = withDefaults(defineProps<IIconProps>(), {
  size: 24
});

const iconHash = ref('');

const computedStyles = computed(() => ({
  minWidth: `${props.width ?? props.size}px`,
  minHeight: `${props.height ?? props.size}px`
}));

const iconsImport = import.meta.glob<{
  default: string;
}>('/src/shared/assets/icons/**/*.svg');

const resolveIcon = async () => {
  const path = `/src/shared/assets/icons/${props.name}.svg`;
  const iconLoader = iconsImport[path];

  if (iconLoader) {
    const iconModule = await iconLoader();
    iconHash.value = iconModule.default;
  } else {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`);
  }
};

watchEffect(resolveIcon);
</script>

<style lang="postcss" module src="../styles.module.pcss" />
