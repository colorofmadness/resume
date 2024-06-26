<template>
  <div class="grid-container">
    <nav v-if="isOpen" class="navigation">
      <ul class="navigation__list">
        <li v-for="link of LINKS" :key="link.id" :style="link.style" class="navigation__list-item">
          <router-link :to="`#${link.id}`" class="navigation__list-link" title="Home" />
        </li>
      </ul>
    </nav>
    <tab-item v-for="link of LINKS" :id="link.id" :key="link.id" :style="link.style">
      <inner-layout>
        <component :is="link.component" />
      </inner-layout>
    </tab-item>

    <tab-item id="current" :style="[currentView?.style, { visibility: 'hidden' }]" current>
      <inner-layout>
        <component :is="currentView?.component" />
      </inner-layout>
    </tab-item>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, shallowRef, watch } from 'vue';
import TabItem from '@components/main-page/tab-item/tab-item.vue';
import { LINKS, type TLinks } from '@components/main-page/const';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import InnerLayout from '@/layouts/inner-layout';

import useGlobalStore from '@/store/global';

import animation from './animation';

const store = useGlobalStore();
const { openModal, closeModal } = store;
const { isOpen } = storeToRefs(store);

const currentView = shallowRef<TLinks | null>(null);
const route = useRoute();

const openMenu = () => {
  if (!currentView.value) return;
  animation('current', currentView.value.id, currentView.value.style['--span']);
  openModal();
  currentView.value = null;
};

const selectView = (link: TLinks) => {
  currentView.value = link;
  animation(link.id, 'current', link.style['--span']);
  closeModal();
};

const findLinkByHash = (hash: string): TLinks | undefined => {
  return LINKS.find((el) => el.id === hash.slice(1));
};

onMounted(() => {
  if (route.hash) {
    const link: TLinks | undefined = findLinkByHash(route.hash);
    if (!link) return;
    selectView(link);
  }
});

watch(
  () => route.hash,
  (value, oldValue) => {
    if (value !== oldValue) {
      const link: TLinks | undefined = findLinkByHash(value);
      let timeout = 0;

      if (currentView.value) {
        openMenu();
        timeout = 300;
      }

      if (!link) return;
      setTimeout(() => {
        selectView(link);
      }, timeout);
    }
  }
);
</script>

<style lang="scss" src="./main-page.scss" />
