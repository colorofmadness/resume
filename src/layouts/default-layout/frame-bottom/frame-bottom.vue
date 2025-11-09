<template>
  <div :class="$style['frame-bottom']">
    <div :class="$style['frame-bottom__theme']">
      <v-theme-switch />
    </div>
    <aside :class="$style['frame-bottom__info']">
      <div :class="$style['frame-bottom__time']">
        {{ dateFormat(timestamp, 'Пермь HH:mm') }}
      </div>
      <div :class="$style['frame-bottom__links']">
        <a
          v-for="(link, idx) in links"
          :key="idx"
          :class="$style['frame-bottom__link']"
          :href="link.site"
          target="_blank"
        >
          <v-icon :name="link.icon" :size="18" />
        </a>
      </div>
    </aside>
  </div>
</template>
<script lang="ts" setup>
import VThemeSwitch from '@components/v-theme-switch';
import { VIcon } from '@components/ui';
import { useTimestamp } from '@vueuse/core';

import { dateFormat } from '@/helpers/format';

const timestamp = useTimestamp({ offset: 5 });
const links = [
  {
    site: 'https://vk.com/colorofmadness',
    icon: 'social/vk'
  },
  {
    site: 'https://t.me/colorofmadness',
    icon: 'social/telegram'
  },
  {
    site: 'https://github.com/colorofmadness',
    icon: 'social/git'
  }
];
</script>

<style lang="postcss" module src="./frame-bottom.module.pcss" />
