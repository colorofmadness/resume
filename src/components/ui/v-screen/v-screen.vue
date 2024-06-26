<template>
  <div class="card">
    <div class="card__header">
      <div class="card__header-tile">
        <slot name="title" />
      </div>
      <div class="card__header-actions">
        <v-icon :size="isMobile ? 12 : 16" name="header/resize" />
        <v-icon :size="isMobile ? 12 : 16" name="header/fullscreen" />
        <v-icon :size="isMobile ? 12 : 16" name="header/close" />
      </div>
    </div>
    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VIcon from '@components/ui/v-icon';
import { useScreenSize } from '@/composables';

import IScreenSlots from './types';

defineSlots<IScreenSlots>();
const { isMobile } = useScreenSize();
</script>

<style lang="scss" scoped src="./v-screen.scss" />
