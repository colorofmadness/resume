<template>
  <transition name="fade">
    <div v-show="isOpen" :class="$style['frame-absolute']">
      <div v-for="i of 2" :key="i" :class="$style['frame-absolute__spotlight-box']">
        <SSpotlight data-spotlight />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { storeToRefs } from 'pinia';

import useGlobalStore from '@app/providers/store/global';

import { SSpotlight } from '@shared/ui';

const store = useGlobalStore();
const { isOpen } = storeToRefs(store);

onMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      duration: 5,
      ease: 'power2.inOut'
    }
  });

  tl.from(
    '[data-spotlight]',
    {
      scale: 0.5,
      stagger: {
        each: 2,
        repeat: -1,
        yoyo: true
      }
    },
    '-=0.15'
  );
});
</script>

<style lang="postcss" module src="../style.module.pcss" />
