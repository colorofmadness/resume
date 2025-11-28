<template>
  <WDefaultLayout>
    <div :class="$style['grid-container']">
      <nav v-if="isOpen" :class="$style['navigation']">
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
      <EPageNav v-for="link of LINKS" :id="link.id" :key="link.id" :style="link.style">
        <KeepAlive>
          <Component :is="link.component" />
        </KeepAlive>
      </EPageNav>

      <EPageNav
        id="current"
        :style="[currentLink?.style, { visibility: isOpen ? 'hidden' : 'visible' }]"
        current
      >
        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <Component :is="Component" />
          </KeepAlive>
        </RouterView>
      </EPageNav>
    </div>
  </WDefaultLayout>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import useGlobalStore from '@app/providers/store/global';

import WDefaultLayout from '@widgets/layout/default-layout';

import EPageNav from '@features/page-nav';

import { usePageAnimation } from '@shared/lib/composables/animation';

const store = useGlobalStore();
const { isOpen } = storeToRefs(store);

const { LINKS, currentLink } = usePageAnimation();
</script>

<style lang="postcss" module src="../style.module.pcss" />
