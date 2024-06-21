<template>
  <div class="frame-top">
    <div class="frame-top__actions">
      <button class="action">
        <v-icon :size="16" name="header/resize" />
      </button>
      <button class="action" @click="toggle">
        <v-icon :name="computedIcon" :size="16" />
      </button>
      <button class="action" @click="closeWindow">
        <v-icon :size="16" name="header/close" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { useFullscreen } from '@vueuse/core';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const { toggle, isFullscreen } = useFullscreen();
const router = useRouter();

const computedIcon = computed(() => (isFullscreen.value ? 'header/windowed' : 'header/fullscreen'));

const closeWindow = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped src="./frame-top.scss" />
