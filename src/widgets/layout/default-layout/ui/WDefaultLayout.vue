<template>
  <div :class="$style['frame']">
    <WFrameSpotlight />
    <div :class="$style['frame-main']">
      <WHeader />
      <WFrameTop />
      <div :class="$style['frame-content']">
        <slot />
      </div>
      <WFrameBottom />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WFrameBottom, WFrameSpotlight, WFrameTop, WHeader } from '../../components';
</script>

<style lang="postcss" module src="../style.module.pcss" />
