<template>
  <div class="qr">
    <v-icon :name="iconQrName" :size="150" />

    <a :href="href" target="_blank">
      {{ linkName }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';

import IQrProps from './types';

defineProps<IQrProps>();
</script>

<style lang="scss" scoped src="./contact-qr.scss" />
