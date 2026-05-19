<template>
  <div ref="overlay" :class="$style.overlay">
    <div ref="loader" :class="$style.loader">
      <div :class="$style['loader-text']">
        <span>LOADING...</span>
        <span>{{ Math.round(progress) }}%</span>
      </div>
      <div ref="bar" :class="$style.bar">
        <div ref="fill" :class="$style['bar-fill']" :style="{ width: `${progress}%` }" />
      </div>
    </div>
  </div>
  <div ref="border" :class="$style.border" />
</template>

<script lang="ts" setup>
import useLoaderAnimation from '../model/useLoaderAnimation';

const emit = defineEmits<{
  complete: [];
}>();

const { progress } = useLoaderAnimation(() => emit('complete'));
</script>

<style lang="postcss" module src="../styles.module.pcss" />
