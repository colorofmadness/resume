<template>
  <div :class="$style['grid-container']">
    <nav v-if="!isOpen" :class="$style['navigation']">
      <ul :class="$style['navigation__list']">
        <li
          v-for="link of LINKS"
          :key="link.id"
          :class="$style['navigation__list-item']"
          :style="link.style"
        >
          <router-link
            :class="$style['navigation__list-link']"
            :title="link.name"
            :to="{ name: link.id }"
          />
        </li>
      </ul>
    </nav>
    <SScreen
      v-for="link of LINKS"
      :id="link.id"
      :key="link.id"
      :is-active="link.id === currentLink?.id && isOpen"
      :style="link.style"
    >
      <Component :is="link.component" />
    </SScreen>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import useGlobalStore from '@app/providers/store/global';

import { usePageAnimation } from '@shared/lib/composables/animation';
import { SScreen } from '@shared/ui';

const store = useGlobalStore();
const { isOpen } = storeToRefs(store);

const { LINKS, currentLink } = usePageAnimation();
</script>

<style lang="postcss" module src="../style.module.pcss" />
