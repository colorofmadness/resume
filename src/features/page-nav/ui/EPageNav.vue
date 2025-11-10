<template>
  <SScreen :id="id" :class="[$style['section'], { [$style['section--active']]: current }]">
    <div :class="$style['section__content']" data-tab-content>
      <slot />
    </div>
  </SScreen>
</template>

<script lang="ts" setup>
import { SScreen } from '@shared/ui';

import type IPageNavProps from '../model/types';

defineProps<IPageNavProps>();
</script>

<style lang="postcss" module src="../EPageNav.module.pcss" />
