<template>
  <default-layout>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </default-layout>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

import DefaultLayout from '@/layouts/default-layout';
</script>

<style lang="scss">
#transition-element {
  width: 100%;
  height: 100%;
  background: var(--background);
  z-index: var(--z-index-modal);
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
}
</style>
