<template>
  <div :class="[$style['projects-block'], 'container']">
    <STitle>Проекты</STitle>
    <div :class="$style['projects-list']">
      <a
        :class="$style['projects-list__item']"
        href="https://colorofmadness-memorygame.netlify.app/"
        target="_blank"
      >
        <SScreen>
          <template #title>Игра на память</template>
          <SImage :src="memoryImg" />
        </SScreen>
      </a>
      <a
        :class="$style['projects-list__item']"
        href="https://colorofmadnessrealtimechat.netlify.app/"
        target="_blank"
      >
        <SScreen>
          <template #title>Чат в реальном времени</template>
          <SImage :src="chatImg" />
        </SScreen>
      </a>
      <SScreen>
        <template #title>В разработке</template>
        <SIcon :size="250" name="project/broken" />
      </SScreen>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SIcon, SImage, SScreen, STitle } from '@shared/ui';
import memoryImg from '@shared/assets/images/memory.png';
import chatImg from '@shared/assets/images/chat.png';
</script>

<style lang="postcss" module src="../PProjects.pcss" />
