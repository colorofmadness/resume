<template>
  <div :class="$style['about-splitter']">
    <div :class="[$style['about-splitter__layer'], $style['about-splitter__layer--bottom']]">
      <div :class="$style['about-splitter__content-wrap']">
        <div :class="$style['about-splitter__content-body']">
          <h1>life</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum maiores quaerat
            tempora! Aspernatur doloribus iste modi, molestiae repellendus vero vitae! Debitis earum
            exercitationem fugiat nobis quod? Consequatur delectus deserunt id? Aliquam dolore
            exercitationem incidunt provident reiciendis similique sint. Aperiam commodi enim
            eveniet nobis, quas quod! Architecto modi non sit.
          </p>
        </div>
        <VImage :class="$style['about-splitter__image']" :src="work" />
      </div>
    </div>

    <div
      :class="[$style['about-splitter__layer'], $style['about-splitter__layer--top']]"
      :style="topLayerStyle"
    >
      <div :class="$style['about-splitter__content-wrap']">
        <div :class="$style['about-splitter__content-body']">
          <h1>work</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum maiores quaerat
            tempora! Aspernatur doloribus iste modi, molestiae repellendus vero vitae! Debitis earum
            exercitationem fugiat nobis quod? Consequatur delectus deserunt id? Aliquam dolore
            exercitationem incidunt provident reiciendis similique sint. Aperiam commodi enim
            eveniet nobis, quas quod! Architecto modi non sit.
          </p>
        </div>
        <VImage :class="$style['about-splitter__image']" :src="life" alt="test" />
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
import useSplitter from '@composables/useSplitter';
import { VImage } from '@components/ui';

import work from '@/assets/images/sticker.png';
import life from '@/assets/images/sticker2.png';

const { handleStyle, topLayerStyle, onDragStart, onDragEnd } = useSplitter();
</script>

<style lang="postcss" module>
.about-splitter {
  --top: 50%;

  user-select: none;
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: hidden;

  &__layer {
    position: absolute;
    width: 100%;
    min-height: 100%;
    overflow: hidden;

    &--bottom {
      background: var(--accent);
      z-index: 1;

      .about-splitter__content-body {
        right: 5%;
      }
    }

    &--top {
      background: var(--background);
      z-index: 2;

      @mixin background-cell;

      .about-splitter__content-body {
        left: 5%;
      }
    }
  }

  &__content-wrap {
    position: absolute;
    width: calc(100vw - 58px);
    min-height: 100%;
  }

  &__content-body {
    width: 25%;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
  }

  &__image {
    position: absolute;
    width: 35%;
    top: 67%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__handle {
    position: absolute;
    height: 100%;
    display: block;
    background-color: var(--text);
    width: 5px;
    top: 0;
    z-index: 3;
    cursor: ew-resize;

    &::before {
      content: '';
      background-color: var(--text);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: var(--top);
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }
  }
}
</style>
