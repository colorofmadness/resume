<template>
  <div class="tech-list">
    <h4>{{ title }}</h4>
    <div class="tech-list__container">
      <v-button v-for="(item, index) of items" :key="index">
        <v-icon :name="item.icon" />
        {{ item.name }}
      </v-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VButton, VIcon } from '@components/ui';

import { ITechListProps } from './types';

defineProps<ITechListProps>();
</script>

<style lang="scss" scoped src="./tech-list.scss" />
