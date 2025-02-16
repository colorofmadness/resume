<template>
  <div class="projects-block container">
    <v-title>Проекты</v-title>
    <div class="projects-list">
      <a
        class="projects-list__item"
        href="https://colorofmadness-memorygame.netlify.app/"
        target="_blank"
      >
        <v-screen>
          <template #title> Игра на память</template>
          <v-image :src="memoryImg" />
        </v-screen>
      </a>
      <a
        class="projects-list__item"
        href="https://colorofmadnessrealtimechat.netlify.app/"
        target="_blank"
      >
        <v-screen>
          <template #title> Чат в реальном времени</template>
          <v-image :src="chatImg" />
        </v-screen>
      </a>
      <v-screen>
        <template #title>В разработке</template>
        <v-icon name="project/broken" size="250" />
      </v-screen>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VIcon, VImage, VScreen, VTitle } from '@components/ui';
import memoryImg from '@assets/images/memory.png';
import chatImg from '@assets/images/chat.png';
</script>

<style lang="scss" scoped src="./projects-block.scss" />
