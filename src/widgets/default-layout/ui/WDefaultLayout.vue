<template>
  <div :class="$style['frame']">
    <WSpotlight />
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
import WHeader from '../../header';
import WFrameTop from '../../frame-top';
import WFrameBottom from '../../frame-bottom';
import WSpotlight from '../../spotlight';
</script>

<style lang="postcss" module src="../WDefaultLayout.module.pcss" />
