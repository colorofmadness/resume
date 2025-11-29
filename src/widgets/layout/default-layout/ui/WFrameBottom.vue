<template>
  <div :class="$style['frame-bottom']">
    <div :class="$style['frame-bottom__theme']">
      <FThemeSwitcher />
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
          <SIcon :name="link.icon" :size="18" />
        </a>
      </div>
    </aside>
  </div>
</template>
<script lang="ts" setup>
import { useTimestamp } from '@vueuse/core';

import FThemeSwitcher from '@features/theme-switcher';

import { SIcon } from '@shared/ui';
import { dateFormat } from '@shared/lib/utils/format';

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

<style lang="postcss" module src="../styles.module.pcss" />
