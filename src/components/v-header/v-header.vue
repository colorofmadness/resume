<template>
  <header class="frame-header">
    <div class="frame-header__logo">
      <router-link to="/">
        <v-icon name="logo" />
      </router-link>
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
  </header>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { LINKS } from '@components/main-page/const';
import { useRoute } from 'vue-router';

const route = useRoute();

const isAnchorActive = (anchor: string) => {
  return route.hash === anchor;
};
</script>

<style lang="scss" scoped src="./v-header.scss" />
