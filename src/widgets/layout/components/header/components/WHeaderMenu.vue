<template>
  <div :class="$style['frame-header__menu']">
    <FRouteTitle v-if="isMobile" />
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
          <RouterLink
            :active-class="$style['frame-header__nav-link--active']"
            :class="[$style['frame-header__nav-link']]"
            :data-tooltip="link.name"
            :to="{ name: link.id }"
            @click="toggle"
          >
            <template v-if="isMobile">
              {{ link.name }}
            </template>
            <SIcon v-else :name="link.icon" :size="18" />
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import FRouteTitle from '@features/route-title/ui';

import { LINKS } from '@shared/config/nav-links';
import { useIsOpen, useScreenSize } from '@shared/lib/composables';
import { SIcon } from '@shared/ui';

const { isOpen, toggle } = useIsOpen();
const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="../style.module.pcss" />
