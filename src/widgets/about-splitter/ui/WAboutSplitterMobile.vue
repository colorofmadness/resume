<template>
  <div :class="$style['about-splitter']">
    <FAboutNav />
    <Swiper :class="$style['swiper-container']" :slides-per-view="1" touch-release-on-edges>
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <WAboutSwiper v-bind="slide" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { computed } from 'vue';

import FAboutNav from '@features/about-nav';

import life from '@shared/assets/images/life.png';
import work from '@shared/assets/images/work.png';

import useAboutContent from '../model/useAboutContent';

import WAboutSwiper from './WAboutSwiper.vue';

const { workBlock, lifeBlock } = useAboutContent();

const slides = computed(() => [
  {
    image: work,
    alt: 'work',
    block: workBlock.value,
    variant: 'top' as const
  },
  {
    image: life,
    alt: 'life',
    block: lifeBlock.value,
    variant: 'bottom' as const
  }
]);
</script>

<style lang="postcss" module>
.about-splitter {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
