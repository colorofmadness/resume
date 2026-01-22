<template>
  <div :class="$style['grid-container']">
    <WNavigatorMenu :links="LINKS" />
    <WScreenViewer :current-id="currentLink?.id" :is-open="isOpen" :links="LINKS" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import useUiStore from '@shared/model/ui';

import usePageAnimation from '../model/usePageAnimation';

import WScreenViewer from './WScreenViewer.vue';
import WNavigatorMenu from './WNavigationMenu.vue';

const store = useUiStore();
const { isOpen } = storeToRefs(store);

const { currentLink, LINKS } = usePageAnimation();
</script>

<style lang="postcss" module src="../styles.module.pcss" />
