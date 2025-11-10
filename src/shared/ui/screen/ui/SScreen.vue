<template>
  <div :class="$style['screen']">
    <div :class="$style['screen__header']" data-screen-header>
      <div :class="$style['screen__header-tile']">
        <slot name="title" />
      </div>
      <div :class="$style['screen__header-actions']">
        <s-icon :size="isMobile ? 12 : 16" name="header/resize" />
        <s-icon :size="isMobile ? 12 : 16" name="header/fullscreen" />
        <s-icon :size="isMobile ? 12 : 16" name="header/close" />
      </div>
    </div>
    <div :class="$style['screen__content']" data-screen-content>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScreenSize } from '@shared/lib/composables';
import IScreenSlots from '../types';


import SIcon from '../../icon';

defineSlots<IScreenSlots>();
const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="../SScreen.module.pcss" />
