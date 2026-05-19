<template>
  <div :class="[$style['frame'], { [$style['frame--resized']]: isResized }]">
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
    <div v-if="isResized" :class="$style['frame-author']">Developed by Vladimir Iaroslavtsev</div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import useUiStore from '@shared/model/ui';

import useLoadingBar from '../model/useLoadingBar';

import WAppLoader from './WAppLoader.vue';
import WHeader from './WHeader.vue';
import WFrameBottom from './WFrameBottom.vue';
import WFrameSpotlight from './WFrameSpotlight.vue';
import WFrameTop from './WFrameTop.vue';

const { showLoader, onLoaderComplete } = useLoadingBar();
const store = useUiStore();
const { isResized } = storeToRefs(store);
</script>

<style lang="postcss" module src="../styles.module.pcss" />
