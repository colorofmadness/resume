<template>
  <div class="frame-header__menu">
    <button
      :class="['frame-header__burger', { 'frame-header__burger--active': isOpen }]"
      tabindex="1"
      @click="toggle"
    >
      <span class="frame-header__wrap">
        <span v-for="i of 3" :key="i" class="frame-header__line" />
      </span>
    </button>
    <nav :class="['frame-header__nav', { 'frame-header__nav--open': isOpen }]">
      <ul class="frame-header__nav-list">
        <li v-for="(link, idx) of LINKS" :key="link.id" class="frame-header__nav-item">
          <template v-if="isMobile">
            <span>0{{ idx + 1 }}.</span>
            <router-link
              :class="[
              'frame-header__nav-link',
              { 'frame-header__nav-link--active': isAnchorActive(`#${link.id}`) }
            ]"
              :to="`#${link.id}`"
              @click="toggle"
            >
              {{ link.name }}
            </router-link>
          </template>
          <template v-else>
            <router-link
              :class="[
                'frame-header__nav-link',
                { 'frame-header__nav-link--active': isAnchorActive(`#${link.id}`) }
              ]"
              :data-tip="link.name"
              :to="`#${link.id}`"
            >
              <v-icon :name="link.icon" :size="18" />
            </router-link>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useIsOpen, useScreenSize } from '@/composables';
import { LINKS } from '@components/main-page/const';
import { VIcon } from '@components/ui';
import { useRoute } from 'vue-router';

const { isOpen, toggle } = useIsOpen();
const { isMobile } = useScreenSize();

const route = useRoute();

const isAnchorActive = (anchor: string) => {
  return route.hash === anchor;
};
</script>

<style lang="scss" scoped src="./v-header-menu.scss" />
