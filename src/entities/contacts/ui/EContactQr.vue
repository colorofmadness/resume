<template>
  <div :class="$style['qr']">
    <SIcon :name="iconQrName" :size="150" />

    <a :href="href" target="_blank">
      {{ linkName }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { SIcon } from '@shared/ui';

import type IContactQrProps from '../model/types';

defineProps<IContactQrProps>();
</script>

<style lang="postcss" module src="../style.module.pcss" />
