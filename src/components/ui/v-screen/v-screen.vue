<template>
  <div class="card">
    <div class="card__header">
      <div class="card__header-tile">
        <slot name="title" />
      </div>
      <div class="card__header-actions">
        <v-icon :size="16" name="header/resize" />
        <v-icon :size="16" name="header/fullscreen" />
        <v-icon :size="16" name="header/close" />
      </div>
    </div>
    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VIcon from '@components/ui/v-icon';

import IScreenSlots from './types';

defineSlots<IScreenSlots>();
</script>

<style lang="scss" scoped src="./v-screen.scss" />
