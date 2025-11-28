<template>
  <div :class="$style['about-splitter']">
    <div :class="[$style['about-splitter__layer'], $style['about-splitter__layer--bottom']]">
      <div :class="$style['about-splitter__wrap']">
        <div :class="$style['about-splitter__body']">
          <h1>life</h1>
        </div>
        <div :class="$style['about-splitter__box']">
          <div :class="$style['about-splitter__image']">
            <SImage :src="life" alt="life" />
          </div>
          <div :class="$style['about-splitter__diamond']" />
        </div>
      </div>
    </div>

    <div
      :class="[$style['about-splitter__layer'], $style['about-splitter__layer--top']]"
      :style="topLayerStyle"
    >
      <div :class="$style['about-splitter__wrap']">
        <div :class="$style['about-splitter__body']">
          <h1>work</h1>
        </div>
        <div :class="$style['about-splitter__box']">
          <div :class="$style['about-splitter__image']">
            <SImage :src="work" alt="work" />
          </div>
          <div :class="$style['about-splitter__diamond']" />
        </div>
      </div>
    </div>

    <div
      :class="$style['about-splitter__handle']"
      :style="handleStyle"
      @mousedown="onDragStart"
      @mouseup="onDragEnd"
    />
  </div>
</template>

<script lang="ts" setup>
import { SImage } from '@shared/ui';
import life from '@shared/assets/images/t1.png';
import work from '@shared/assets/images/t2.png';
import useSplitter from '@shared/lib/composables/useSplitter';

const { handleStyle, topLayerStyle, onDragStart, onDragEnd } = useSplitter();
</script>

<style lang="postcss" module src="../style.module.pcss" />
