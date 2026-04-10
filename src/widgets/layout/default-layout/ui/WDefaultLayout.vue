<template>
  <div :class="$style['frame']">
    <WAppLoader v-if="showLoader" @complete="onLoaderComplete()" />
    <WFrameSpotlight />
    <div :class="[$style['frame-main'], { [$style['frame-main--hidden']]: showLoader }]">
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
import useLoadingBar from '../model/useLoadingBar';

import WAppLoader from './WAppLoader.vue';
import WHeader from './WHeader.vue';
import WFrameBottom from './WFrameBottom.vue';
import WFrameSpotlight from './WFrameSpotlight.vue';
import WFrameTop from './WFrameTop.vue';

const { showLoader, onLoaderComplete } = useLoadingBar();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
