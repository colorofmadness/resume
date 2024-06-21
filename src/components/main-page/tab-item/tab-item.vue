<template>
  <v-screen :id="id" :class="['section', { 'section--active': current }]">
    <div class="section__content">
      <slot />
    </div>
  </v-screen>
</template>

<script lang="ts" setup>
import { VScreen } from '@components/ui';

import type { ITabItemProps } from './types';

defineProps<ITabItemProps>();
</script>

<style lang="scss" scoped src="./tab-item.scss" />
