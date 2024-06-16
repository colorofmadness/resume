<template>
  <main class="primary-layout">
    <perfect-scrollbar>
      <div class="primary-layout__container">
        <slot />
      </div>
    </perfect-scrollbar>
    <v-icon :height="124" :width="364" class="sig" name="sig" />
  </main>
</template>

<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

import 'vue3-perfect-scrollbar/style.css';
import { VIcon } from '@components/ui';
</script>

<style lang="scss" src="./primary-layout.scss" />
