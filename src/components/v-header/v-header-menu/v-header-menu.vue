<template>
  <div :class="$style['frame-header__menu']">
    <v-breadcrumb v-if="isMobile" />
    <button
      :class="[
        $style['frame-header__burger'],
        { [$style['frame-header__burger--active']]: isOpen }
      ]"
      tabindex="1"
      @click="toggle"
    >
      <span :class="$style['frame-header__wrap']">
        <span v-for="i of 3" :key="i" :class="$style['frame-header__line']" />
      </span>
    </button>
    <nav :class="[$style['frame-header__nav'], { [$style['frame-header__nav--open']]: isOpen }]">
      <ul :class="$style['frame-header__nav-list']">
        <li v-for="(link, idx) of LINKS" :key="link.id" :class="$style['frame-header__nav-item']">
          <span v-if="isMobile">0{{ idx + 1 }}.</span>
          <router-link
            :active-class="$style['frame-header__nav-link--active']"
            :class="[$style['frame-header__nav-link']]"
            :data-tooltip="link.name"
            :to="{ name: link.id }"
            @click="toggle"
          >
            <template v-if="isMobile">
              {{ link.name }}
            </template>
            <v-icon v-else :name="link.icon" :size="18" />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useIsOpen, useScreenSize } from '@composables';
import { LINKS } from '@components/main-page/const';
import { VIcon } from '@components/ui';
import VBreadcrumb from '@components/v-breadcrumb';

const { isOpen, toggle } = useIsOpen();
const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="./v-header-menu.module.pcss" />
