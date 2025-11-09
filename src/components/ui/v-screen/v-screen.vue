<template>
  <div :class="$style['screen']">
    <div :class="$style['screen__header']" data-screen-header>
      <div :class="$style['screen__header-tile']">
        <slot name="title" />
      </div>
      <div :class="$style['screen__header-actions']">
        <v-icon :size="isMobile ? 12 : 16" name="header/resize" />
        <v-icon :size="isMobile ? 12 : 16" name="header/fullscreen" />
        <v-icon :size="isMobile ? 12 : 16" name="header/close" />
      </div>
    </div>
    <div :class="$style['screen__content']" data-screen-content>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VIcon from '@components/ui/v-icon';
import { useScreenSize } from '@composables';

import IScreenSlots from './types';

defineSlots<IScreenSlots>();
const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="./v-screen.module.pcss" />
