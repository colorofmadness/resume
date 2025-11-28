<template>
  <WInnerLayout>
    <div :class="[$style['tech-block'], 'container']">
      <STitle :is="isMobile ? 'h2' : 'h1'">Технический стэк</STitle>

      <div :class="$style['tech-block__content']">
        <ETechList
          v-for="(data, index) of MOCK_DATA"
          :key="index"
          :items="data.items"
          :title="data.title"
        />
      </div>
    </div>
  </WInnerLayout>
</template>

<script lang="ts" setup>
import WInnerLayout from '@widgets/layout/inner-layout';

import ETechList, { MOCK_DATA } from '@entities/tech';

import { useScreenSize } from '@shared/lib/composables';
import { STitle } from '@shared/ui';

const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="../style.module.pcss" />
