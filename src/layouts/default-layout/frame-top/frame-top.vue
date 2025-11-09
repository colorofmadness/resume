<template>
  <div :class="$style['frame-top']">
    <v-breadcrumb />
    <div :class="$style['frame-top__actions']">
      <button v-for="button of actionButtons" :key="button.icon" :class="$style['action']">
        <v-icon :name="button.icon" :size="16" @click="button.action" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { useFullscreen } from '@vueuse/core';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import VBreadcrumb from '@components/v-breadcrumb';

const { toggle, isFullscreen } = useFullscreen();
const router = useRouter();

const computedIcon = computed(() => (isFullscreen.value ? 'header/windowed' : 'header/fullscreen'));

const closeWindow = () => {
  router.push('/');
};

const actionButtons = [
  {
    icon: 'header/resize',
    action: () => {}
  },
  {
    icon: computedIcon.value,
    action: toggle
  },
  { icon: 'header/close', action: closeWindow }
];
</script>

<style lang="postcss" module src="./frame-top.module.pcss" />
