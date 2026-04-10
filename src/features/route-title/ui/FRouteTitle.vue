<template>
  <div :class="$style['route-title']">
    <span :class="$style['route-title-text']">{{ pageAnimation.displayedText }}</span>
    <span>{{ extAnimation.displayedText }}</span>
  </div>
</template>

<script lang="ts" setup>
import useRouteTitleAnimation from '../model/useRouteTitleAnimation';

const { pageAnimation, extAnimation } = useRouteTitleAnimation();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
