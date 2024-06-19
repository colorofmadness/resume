<template>
  <div class="frame-top">
    <div class="frame-top__actions">
      <button>
        <v-icon :size="16" name="header/resize" />
      </button>
      <button @click="toggle">
        <v-icon :name="computedIcon" :size="16" />
      </button>
      <button>
        <v-icon :size="16" name="header/close" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { useFullscreen } from '@vueuse/core';
import { computed } from 'vue';

const { toggle, isFullscreen } = useFullscreen();

const computedIcon = computed(() => (isFullscreen.value ? 'header/windowed' : 'header/fullscreen'));
</script>

<style lang="scss" scoped src="./frame-top.scss" />
