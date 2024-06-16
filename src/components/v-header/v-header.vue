<template>
  <header class="header">
    <div class="header__title">
      colorofmadness/{{ route.meta.title }}
      <span>{{ route.meta.ext }}</span>
    </div>
    <div class="header__actions">
      <v-theme-switch />
      <v-header-menu />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import VThemeSwitch from '@components/v-header/v-theme-switch';
import VHeaderMenu from '@components/v-header/v-header-menu';

const route = useRoute();
</script>

<style lang="scss" scoped src="./v-header.scss" />
