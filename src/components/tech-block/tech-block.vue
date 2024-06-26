<template>
  <div class="tech-block container">
    <v-title :is="isMobile ? 'h2' : 'h1'">Технический стэк</v-title>

    <div class="tech-block__content">
      <tech-list
        v-for="(data, index) of MOCK_DATA"
        :key="index"
        :items="data.items"
        :title="data.title"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VTitle from '@components/ui/v-title/v-title.vue';
import { useScreenSize } from '@/composables';

import TechList from './tech-list';
import MOCK_DATA from './const';

const { isMobile } = useScreenSize();
</script>

<style lang="scss" scoped src="./tech-block.scss" />
