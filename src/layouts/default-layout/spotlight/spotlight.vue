<template>
  <transition name="fade">
    <div v-show="globalStore.isOpen" class="frame-absolute">
      <div v-for="i of 2" :key="i" class="frame-absolute__spotlight-box">
        <div class="frame-absolute__spotlight" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

import useGlobalStore from '@/store/global';

const globalStore = useGlobalStore();

onMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      duration: 5,
      ease: 'power2.inOut'
    }
  });

  tl.from(
    '.frame-absolute__spotlight',
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

<style lang="scss" scoped src="./spotlight.scss" />
