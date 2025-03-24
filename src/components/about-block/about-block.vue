<template>
  <div id="aboutBlock" ref="containerElement" class="about-block container">
    <about-card
      :options="{
        initialValue: {
          x: 270,
          y: 288
        }
      }"
      class="wrapper-photo"
    >
      <v-screen>
        <template #title>Фото</template>
        <v-image :src="photo" use-fullscreen />
      </v-screen>
    </about-card>
    <about-card
      :options="{
        initialValue: {
          x: 886,
          y: 656
        }
      }"
      class="wrapper-photo"
    >
      <v-screen>
        <template #title>Дитятко</template>
        <v-image :src="loki" use-fullscreen />
      </v-screen>
    </about-card>
    <about-card
      :options="{
        initialValue: {
          x: 330,
          y: 533
        }
      }"
      class="wrapper-about"
    >
      <v-screen>
        <template #title>Обо мне</template>
        <ol class="wrapper__list">
          <li>Привет, меня зовут Владимир, занимаюсь Frontend разработкой с 2020 года.</li>
          <li>Отец «любимого ангелочка» по кличке Локи.</li>
          <li>
            Обладаю системным видением разработки веб-приложений, работал с различными подходами и
            стеком в B2C и B2B-сегментах.
          </li>
          <li>Имею опыт управления командой и наставничества.</li>
          <li>
            Умею проектировать архитектуру, оптимизировать производительность и внедрять best
            practices в команде.
          </li>
        </ol>
      </v-screen>
    </about-card>
    <about-card
      :options="{
        initialValue: {
          x: 596,
          y: 313
        }
      }"
      class="wrapper-colab"
    >
      <v-screen>
        <template #title>Сотрудничество</template>
        <ol class="wrapper__list">
          <li>
            Я предпочитаю сотрудничать с компаниями, которым необходимы технические знания в
            сочетании с пониманием дизайна и эстетики.
          </li>
          <li>
            Я добиваюсь наилучших результатов в партнерстве, основанном на взаимопонимании и тесном
            сотрудничестве между всеми вовлеченными сторонами, особенно в проектировании и
            разработке.
          </li>
        </ol>
      </v-screen>
    </about-card>
    <about-card
      :options="{
        initialValue: {
          x: 524,
          y: 795
        }
      }"
      class="wrapper-social"
    >
      <v-screen>
        <template #title>Соцсети</template>
        <ol class="wrapper__list">
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

<style lang="scss" scoped src="./about-block.scss" />
