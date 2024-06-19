<template>
  <section :id="id" :class="['section', { 'section--active': current }]">
    <div class="section__content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ITabItemProps } from './types';

defineProps<ITabItemProps>();
</script>

<style lang="scss" scoped src="./tab-item.scss" />
