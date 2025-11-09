<template>
  <div id="aboutBlock" ref="containerElement" :class="$style['about-block']">
    <about-card
      :class="$style['wrapper-photo']"
      :options="{
        initialValue: {
          x: 270,
          y: 288
        }
      }"
    >
      <v-screen>
        <template #title>Фото</template>
        <v-image :src="photo" use-fullscreen />
      </v-screen>
    </about-card>
    <about-card
      :class="$style['wrapper-photo']"
      :options="{
        initialValue: {
          x: 886,
          y: 656
        }
      }"
    >
      <v-screen>
        <template #title>Дитятко</template>
        <v-image :src="loki" use-fullscreen />
      </v-screen>
    </about-card>
    <about-card
      :class="$style['wrapper-about']"
      :options="{
        initialValue: {
          x: 330,
          y: 533
        }
      }"
    >
      <v-screen>
        <template #title>Обо Мне</template>
        <ul :class="$style['wrapper__list']">
          <li>
            <strong>5+ лет опыта</strong> в Full-Cycle Frontend разработке B2B/B2C web-приложений.
            Глубокий экспертный фокус на стеке <u>Vue 3, TypeScript, Vite</u> и
            SCSS/Styled-Components.
          </li>
          <li>
            <strong>Специализация на UI-библиотеках:</strong> Опыт
            <u>проектирования архитектуры, разработки, масштабирования</u> и документирования
            внутренних UI-библиотек (Vue 3, PrimeVue).
          </li>
          <li>
            <strong>Опыт техлида и наставника:</strong> Эффективное <u>руководство командами</u> (до
            5 Frontend-разработчиков), включая менторинг, Code Review и внедрение best practices
            (FSD, чистый код).
          </li>
          <li>
            <strong>Системность и производительность:</strong> Применяю системный подход к
            архитектуре, активно занимаюсь <u>оптимизацией производительности</u> (Vue, Nuxt) и
            поддержкой поддерживаемости кода.
          </li>
        </ul>
      </v-screen>
    </about-card>
    <about-card
      :class="$style['wrapper-colab']"
      :options="{
        initialValue: {
          x: 596,
          y: 313
        }
      }"
    >
      <v-screen>
        <template #title>Soft Skills</template>
        <ul :class="$style['wrapper__list']">
          <li>
            <strong>Проактивное взаимодействие:</strong> Успешная коммуникация с
            кросс-функциональными командами (Backend, PM, QA, UX/UI) для
            <u>быстрого согласования требований</u> и разрешения технических споров.
          </li>
          <li>
            <strong>Менторинг и Код-ревью:</strong> Опыт
            <u>наставничества (менторства)</u> Frontend-разработчиков и проведение эффективного Code
            Review, направленного на поддержание чистоты кода и общих стандартов.
          </li>
          <li>
            <strong>Технический кругозор:</strong> Способность к
            <u>быстрому освоению новых технологий</u> и инструментов (например, переход на Vue
            3/Vite, работа с FSD).
          </li>
          <li>
            <strong>Системный подход:</strong> Высокий уровень ответственности при
            <u>проектировании архитектуры</u>
            сложных B2B/B2C систем и планировании релизов.
          </li>
        </ul>
      </v-screen>
    </about-card>
    <about-card
      :class="$style['wrapper-social']"
      :options="{
        initialValue: {
          x: 524,
          y: 795
        }
      }"
    >
      <v-screen>
        <template #title>Соцсети</template>
        <ol :class="$style['wrapper__list']">
          <li>
            <a href="https://github.com/colorofmadness" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://t.me/colorofmadness" target="_blank">Телеграм</a>
          </li>
          <li>
            <a href="https://vk.com/colorofmadness" target="_blank">ВКонтакте</a>
          </li>
        </ol>
      </v-screen>
    </about-card>
  </div>
</template>

<script lang="ts" setup>
import { VImage, VScreen } from '@components/ui';
import photo from '@assets/images/photo-main.jpg';
import loki from '@assets/images/loki.jpg';

import AboutCard from './about-card/about-card.vue';
</script>

<style lang="postcss" module src="./about-block.module.pcss" />
