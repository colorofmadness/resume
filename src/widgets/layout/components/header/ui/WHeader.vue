<template>
  <header :class="$style['frame-header']">
    <div :class="$style['frame-header__logo']">
      <RouterLink to="/">
        <SIcon name="logo" />
      </RouterLink>
    </div>
    <WHeaderMenu />
  </header>
</template>

<script lang="ts" setup>
import { SIcon } from '@shared/ui';

import WHeaderMenu from '../components';
</script>

<style lang="postcss" module src="../style.module.pcss" />
