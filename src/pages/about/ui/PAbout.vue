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
        <SImage :class="$style['about-splitter__image']" :src="work" />
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
        <SImage :class="$style['about-splitter__image']" :src="life" alt="test" />
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
import useSplitter from '@shared/lib/composables/useSplitter';
import work from '@shared/assets/images/sticker.png';
import life from '@shared/assets/images/sticker2.png';

const { handleStyle, topLayerStyle, onDragStart, onDragEnd } = useSplitter();
</script>

<style lang="postcss" module src="../PAbout.module.pcss" />
