<template>
  <div class="grid-container">
    <nav v-if="store.isOpen" class="navigation">
      <ul class="navigation__list">
        <li v-for="link of LINKS" :key="link.id" :style="link.style" class="navigation__list-item">
          <router-link
            :to="'#' + link.id"
            class="navigation__list-link"
            title="Home"
            @click="selectView(link)"
          />
        </li>
      </ul>
    </nav>
    <tab-item v-for="link of LINKS" :id="link.id" :key="link.id" :style="link.style">
      <primary-layout>
        <component :is="link.component" />
      </primary-layout>
    </tab-item>

    <tab-item id="current" :style="[currentView?.style, { visibility: 'hidden' }]" current>
      <primary-layout>
        <component :is="currentView?.component" />
      </primary-layout>
    </tab-item>

    <transition v-if="!store.isOpen" appear mode="in-out" name="fade">
      <v-button class="grid-container__button" @click="openMenu">Назад</v-button>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';
import TabItem from '@components/main-page/tab-item/tab-item.vue';
import { LINKS, type TLinks } from '@components/main-page/const';
import { VButton } from '@components/ui';

import PrimaryLayout from '@/layouts/primary-layout';

import useGlobalStore from '@/store/global';

import animation from './animation';

const store = useGlobalStore();
const currentView = shallowRef<TLinks | null>(null);

const openMenu = () => {
  if (!currentView.value) return;
  animation('current', currentView.value.id, currentView.value.style['--span']);
  store.openModal();
  currentView.value = null;
};

const selectView = (link: TLinks) => {
  currentView.value = link;
  animation(link.id, 'current', link.style['--span']);
  store.closeModal();
};
</script>

<style lang="scss" src="./main-page.scss" />
