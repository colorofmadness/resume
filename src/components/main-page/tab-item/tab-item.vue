<template>
  <v-screen :id="id" :class="[$style['section'], { [$style['section--active']]: current }]">
    <div :class="$style['section__content']" data-tab-content>
      <slot />
    </div>
  </v-screen>
</template>

<script lang="ts" setup>
import { VScreen } from '@components/ui';

import type { ITabItemProps } from './types';

defineProps<ITabItemProps>();
</script>

<style lang="postcss" module src="./tab-item.module.pcss" />
