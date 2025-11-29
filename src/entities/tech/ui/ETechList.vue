<template>
  <div :class="$style['tech-list']">
    <h4>{{ title }}</h4>
    <div :class="$style['tech-list__container']">
      <SButton v-for="(item, index) of items" :key="index">
        <SIcon :name="item.icon" />
        {{ item.name }}
      </SButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SIcon from '@shared/ui/icon';
import SButton from '@shared/ui/button';

import type { ITechListProps } from '../model/types';

defineProps<ITechListProps>();
</script>

<style lang="postcss" module src="../style.module.pcss" />
