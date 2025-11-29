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
import WHeader from './WHeader.vue';
import WFrameBottom from './WFrameBottom.vue';
import WFrameSpotlight from './WFrameSpotlight.vue';
import WFrameTop from './WFrameTop.vue';
</script>

<style lang="postcss" module src="../styles.module.pcss" />
