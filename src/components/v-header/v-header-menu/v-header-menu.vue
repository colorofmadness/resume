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
        <li v-for="route of menuItems" :key="route.name" class="header-menu__item">
          <router-link :to="route.path" @click="toggle">
            {{ route.meta.menuTitle }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useIsOpen } from '@/composables';
import { routes } from '@/router';
import { computed } from 'vue';

const { isOpen, toggle } = useIsOpen();

const menuItems = computed(() => routes.filter((router) => router.meta.showInNav));
</script>

<style lang="scss" scoped src="./v-header-menu.scss" />
