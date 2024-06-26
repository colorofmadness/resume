<template>
  <div class="frame">
    <spotlight />
    <div class="frame-main">
      <v-header />
      <frame-top />
      <div class="frame-content">
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

<style lang="scss" scoped src="./default-layout.scss" />
