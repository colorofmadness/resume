<template>
  <div class="grid-container">
    <transition name="slide">
      <nav v-if="isOpen" class="fake-nav">
        <ul>
          <li>
            <strong>colorofmadness</strong>
          </li>
          <li>File</li>
          <li>Edit</li>
          <li>Find</li>
          <li>View</li>
          <li>Tools</li>
          <li>Window</li>
          <li @click="useGlobalStore().isDark = !useGlobalStore().isDark">changeTheme</li>
        </ul>
      </nav>
    </transition>
    <nav v-if="isOpen" class="navigation">
      <ul class="navigation__list">
        <li v-for="link of LINKS" :key="link.id" :style="link.style" class="navigation__list-item">
          <router-link
            :to="link.id"
            class="navigation__list-link"
            title="Home"
            @click.prevent="selectView(link)"
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

    <v-button class="menu" @click="openMenu">Open Menu</v-button>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';
import TabItem from '@components/main-page/tab-item/tab-item.vue';
import { VButton } from '@components/ui';
import { useIsOpen } from '@/composables';
import gsap from 'gsap';
import { useElementBounding } from '@vueuse/core';
import { LINKS, type TLinks } from '@components/main-page/const';

import PrimaryLayout from '@/layouts/primary-layout';

import useGlobalStore from '@/store/global';

const { isOpen, openModal, closeModal } = useIsOpen(true);
const currentView = shallowRef<TLinks | null>(null);

const calculatePosition = (element: HTMLElement) => {
  const { top, left, width, height } = useElementBounding(element);
  return {
    top: top.value,
    left: left.value,
    width: width.value,
    height: height.value
  };
};

const animation = (fromHero: HTMLElement, toHero: HTMLElement) => {
  const { body } = document;
  const clone = fromHero.cloneNode(true);
  const from = calculatePosition(fromHero);
  const to = calculatePosition(toHero);

  const onComplete = () => {
    gsap.set(toHero, { visibility: 'visible' });

    body.removeChild(clone);
  };

  const tl = gsap.timeline({ onComplete });
  tl.set([fromHero, toHero], { visibility: 'hidden' });
  tl.set(clone, {
    position: 'fixed',
    ...from
  }).to(clone, {
    x: to.left - from.left,
    y: to.top - from.top,
    width: to.width,
    height: to.height,
    ease: 'power1',
    duration: 0.5
  });

  body.appendChild(clone);
};

const openMenu = () => {
  if (!currentView.value) return;
  const to = document.getElementById(currentView.value.id);
  const from = document.getElementById('current');
  if (!to || !from) return;

  openModal();
  animation(from, to);
  currentView.value = null;
};

const selectView = (link: TLinks) => {
  currentView.value = link;
  const from = document.getElementById(link.id);
  const to = document.getElementById('current');
  if (!to || !from) return;

  animation(from, to);
  closeModal();
};
</script>

<style lang="scss">
.fake-nav {
  position: fixed;
  height: 2rem;
  z-index: 11;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background: color-mix(in srgb, var(--background), transparent 25%);
  backdrop-filter: blur(4px);
}

.fake-nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}

.menu {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  translate: -50% 0;
  z-index: 10;
}
</style>
<style lang="scss" src="./main-page.scss" />
