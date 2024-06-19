<template>
  <div class="frame-absolute">
    <div class="frame-absolute__spotlight-box">
      <div class="frame-absolute__spotlight" />
    </div>
    <div class="frame-absolute__spotlight-box">
      <div class="frame-absolute__spotlight" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

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
