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
        <v-image :src="photo" />
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
          <li>
            Я получаю удовольствие от создания продуманных интерфейсов. Поэтому постоянно стараюсь
            открывать для себя что-то новое.
          </li>
          <li>
            Имея небольшой опыт работы дизайнером, я стремлюсь создавать проекты, которые будут не
            только визуально привлекательными, но и технически, благодаря чистому и правильно
            структурированному коду.
          </li>
          <li>
            Я сосредоточен на разработке интерфейсов приложений, хотя также могу позаботиться обо
            всех других этапах разработки, от настройки CMS до оперативного развертывания на
            платформе хостинга.
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
          x: 523,
          y: 842
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

import AboutCard from './about-card/about-card.vue';
</script>

<style lang="scss" scoped src="./about-block.scss" />
