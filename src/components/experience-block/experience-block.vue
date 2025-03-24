<template>
  <div class="exp-block container">
    <div class="exp-block__title">
      <v-title :is="isMobile ? 'h2' : 'h1'">Опыт работы</v-title>
      <v-title :is="isMobile ? 'h3' : 'h2'" color="text-80">
        {{ getWorkTime(new Date(2020, 5, 1)) }}
      </v-title>
    </div>

    <div class="exp-block__content">
      <resume-block v-for="(resume, key) of RESUME_LIST" :key="key" :resume="resume" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VTitle } from '@components/ui';
import { RESUME_LIST } from '@components/experience-block/const';
import { useScreenSize } from '@/composables';
import ResumeBlock from '@components/experience-block/resume-block';

import { getWorkTime } from '@/helpers/format';

const { isMobile } = useScreenSize();
</script>

<style lang="scss" scoped src="./experience-block.scss" />
