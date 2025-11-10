<template>
  <div :class="$style['grid-container']">
    <nav v-if="isOpen" :class="$style['navigation']">
      <ul :class="$style['navigation__list']">
        <li
          v-for="link of LINKS"
          :key="link.id"
          :class="$style['navigation__list-item']"
          :style="link.style"
        >
          <router-link
            :class="$style['navigation__list-link']"
            :title="link.name"
            :to="{ name: link.id }"
          />
        </li>
      </ul>
    </nav>
    <tab-item v-for="link of LINKS" :id="link.id" :key="link.id" :style="link.style">
      <inner-layout>
        <component :is="link.component" />
      </inner-layout>
    </tab-item>

    <tab-item
      id="current"
      :style="[currentLink?.style, { visibility: isOpen ? 'hidden' : 'visible' }]"
      current
    >
      <inner-layout>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </inner-layout>
    </tab-item>
  </div>
</template>

<script lang="ts" setup>
import TabItem from '@components/main-page/tab-item/tab-item.vue';
import { storeToRefs } from 'pinia';
import { usePageAnimation } from '@composables';

import InnerLayout from '@/layouts/inner-layout';

import useGlobalStore from '@/store/global';

const store = useGlobalStore();
const { isOpen } = storeToRefs(store);

const { LINKS, currentLink } = usePageAnimation();
</script>

<style lang="postcss" module src="./main-page.module.pcss" />
