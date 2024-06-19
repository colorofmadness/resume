<template>
  <div class="frame-bottom">
    <div class="frame-bottom__theme">
      <v-theme-switch />
    </div>
    <aside class="frame-bottom__info">
      <div class="frame-bottom__time">
        {{ dateFormat(timestamp, 'Пермь HH:mm') }}
      </div>
      <div class="frame-bottom__links">
        <a class="frame-bottom__link" href="https://vk.com/colorofmadness" target="_blank">
          <v-icon :size="16" name="social/vk" />
        </a>
        <a class="frame-bottom__link" href="https://t.me/colorofmadness" target="_blank">
          <v-icon :size="16" name="social/telegram" />
        </a>
        <a class="frame-bottom__link" href="https://github.com/colorofmadness" target="_blank">
          <v-icon :size="16" name="social/git" />
        </a>
      </div>
    </aside>
  </div>
</template>
<script lang="ts" setup>
import VThemeSwitch from '@components/v-theme-switch';
import { VIcon } from '@components/ui';
import { useTimestamp } from '@vueuse/core';

import dateFormat from '@/helpers/format';

const timestamp = useTimestamp({ offset: 5 });
</script>

<style lang="scss" scoped src="./frame-bottom.scss" />
