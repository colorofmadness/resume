<template>
  <section :id="id" :class="['section', { 'section--active': current }]">
    <div class="section__header">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="section__content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ITabItemProps from '@components/main-page/tab-item/types';

defineProps<ITabItemProps>();
</script>

<style lang="scss" scoped src="./tab-item.scss" />
