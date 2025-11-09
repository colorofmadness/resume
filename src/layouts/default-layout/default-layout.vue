<template>
  <div :class="$style['frame']">
    <spotlight />
    <div :class="$style['frame-main']">
      <v-header />
      <frame-top />
      <div :class="$style['frame-content']">
        <slot />
      </div>
      <frame-bottom />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VHeader from '@components/v-header';

import FrameTop from './frame-top';
import FrameBottom from './frame-bottom';
import Spotlight from './spotlight';
</script>

<style lang="postcss" module src="./default-layout.module.pcss" />
