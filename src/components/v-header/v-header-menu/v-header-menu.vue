<template>
  <div class="header-menu">
    <button
      :class="['header-menu__burger', { 'header-menu__burger--active': isOpen }]"
      tabindex="1"
      @click="toggle"
    >
      <span class="header-menu__wrap">
        <span v-for="i of 3" :key="i" class="header-menu__line" />
      </span>
    </button>
    <nav :class="['header-menu__nav', { 'header-menu__nav--open': isOpen }]">
      <ul class="header-menu__list">
        <li v-for="(link, idx) of LINKS" :key="link.id" class="header-menu__item">
          <span>0{{ idx + 1 }}.</span>
          <router-link :to="`#${link.id}`" @click="toggle">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <nav class="frame-header__menu">
    <ul class="frame-header__menu-list">
      <li v-for="link of LINKS" :key="link.id">
        <router-link
          :class="[
              'frame-header__menu-link',
              { 'frame-header__menu-link--active': isAnchorActive(`#${link.id}`) }
            ]"
          :data-tip="link.name"
          :to="`#${link.id}`"
        >
          <v-icon :name="link.icon" :size="18" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useIsOpen } from '@/composables';
import { LINKS } from '@components/main-page/const';
import { VIcon } from '@components/ui';
import { useRoute } from 'vue-router';

const { isOpen, toggle } = useIsOpen();

const route = useRoute();

const isAnchorActive = (anchor: string) => {
  return route.hash === anchor;
};
</script>

<style lang="scss" scoped src="./v-header-menu.scss" />
