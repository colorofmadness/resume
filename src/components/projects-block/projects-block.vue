<template>
  <div :class="[$style['projects-block'], 'container']">
    <v-title>Проекты</v-title>
    <div :class="$style['projects-list']">
      <a
        :class="$style['projects-list__item']"
        href="https://colorofmadness-memorygame.netlify.app/"
        target="_blank"
      >
        <v-screen>
          <template #title>Игра на память</template>
          <v-image :src="memoryImg" />
        </v-screen>
      </a>
      <a
        :class="$style['projects-list__item']"
        href="https://colorofmadnessrealtimechat.netlify.app/"
        target="_blank"
      >
        <v-screen>
          <template #title>Чат в реальном времени</template>
          <v-image :src="chatImg" />
        </v-screen>
      </a>
      <v-screen>
        <template #title>В разработке</template>
        <v-icon :size="250" name="project/broken" />
      </v-screen>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VIcon, VImage, VScreen, VTitle } from '@components/ui';
import memoryImg from '@assets/images/memory.png';
import chatImg from '@assets/images/chat.png';
</script>

<style lang="postcss" module src="./projects-block.module.pcss" />
