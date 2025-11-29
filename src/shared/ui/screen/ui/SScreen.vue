<template>
  <div :id="id" :class="[$style['screen'], { [$style['screen--active']]: isActive }]">
    <div :class="$style['screen__header']">
      <div :class="$style['screen__header-tile']">
        <slot name="title" />
      </div>
      <div :class="$style['screen__header-actions']">
        <SIcon :size="isMobile ? 12 : 16" name="header/resize" />
        <SIcon :size="isMobile ? 12 : 16" name="header/fullscreen" />
        <SIcon :size="isMobile ? 12 : 16" name="header/close" />
      </div>
    </div>
    <div :class="$style['screen-content']">
      <div :class="$style['screen-content__section']">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScreenSize } from '../../../lib/composables';
import type { IScreenProps, IScreenSlots } from '../types';
import SIcon from '../../icon';

defineSlots<IScreenSlots>();
defineProps<IScreenProps>();

const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="../style.module.pcss" />
