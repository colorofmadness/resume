<template>
  <header :class="$style['frame-header']">
    <div :class="$style['frame-header__logo']">
      <router-link to="/">
        <v-icon name="logo" />
      </router-link>
    </div>
    <v-header-menu />
  </header>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';

import VHeaderMenu from './v-header-menu';
</script>

<style lang="postcss" module src="./v-header.module.pcss" />
