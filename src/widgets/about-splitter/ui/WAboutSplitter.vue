<template>
  <div :class="$style['about-splitter']">
    <SplitterPanel variant="bottom" :image="life" alt="life" :block="lifeBlock" />
    <SplitterPanel
      variant="top"
      :image="work"
      alt="work"
      :block="workBlock"
      :style="topLayerStyle"
    />

    <div :class="$style['about-splitter__handle']" :style="handleStyle" @mousedown="onDragStart" />

    <FAboutNav />
  </div>
</template>

<script lang="ts" setup>
import FAboutNav from '@features/about-nav';

import life from '@shared/assets/images/life.png';
import work from '@shared/assets/images/work.png';

import useAboutContent from '../model/useAboutContent';
import useSplitterDrag from '../model/useSplitterDrag';

import SplitterPanel from './SplitterPanel.vue';

const { workBlock, lifeBlock } = useAboutContent();
const { handleStyle, topLayerStyle, onDragStart } = useSplitterDrag();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
