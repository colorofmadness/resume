<template>
  <header class="frame-header">
    <div class="frame-header__logo">
      <a href="/">
        <v-icon name="logo" />
      </a>
    </div>
    <nav class="frame-header__menu">
      <ul class="frame-header__menu-list">
        <li v-for="link of LINKS" :key="link.id">
          <router-link :to="link.id" class="frame-header__menu-link" data-tip="Обо мне">
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
</script>

<style lang="scss" scoped src="./v-header.scss" />
