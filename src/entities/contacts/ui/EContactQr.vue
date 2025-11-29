<template>
  <SCard color="primary-5">
    <div :class="$style['qr']">
      <SIcon :name="iconName" :size="150" />

      <a :href="href" target="_blank">
        {{ label }}
      </a>
    </div>
  </SCard>
</template>

<script lang="ts" setup>
import { SCard, SIcon } from '@shared/ui';

import type IContactQrProps from '../model/types';

defineProps<IContactQrProps>();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
