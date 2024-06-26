<template>
  <div class="exp-block container">
    <div class="exp-block__title">
      <v-title :is="isMobile ? 'h2' : 'h1'">Опыт работы</v-title>
      <v-title :is="isMobile ? 'h3' : 'h2'" color="text-80">
        {{ getWorkTime(new Date('12/1/2020')) }}
      </v-title>
    </div>

    <div class="exp-block__content">
      <div v-for="(resume, idx) of RESUME_LIST" :key="idx" class="resume-block">
        <div class="resume-block__date">
          <v-title is="h4" color="text">
            {{ dateToString(resume.date.start, resume.date.end) }}
          </v-title>
          <span>{{ getWorkTime(resume.date.start, resume.date.end) }}</span>
        </div>
        <div class="resume-block__container">
          <v-title is="h4" color="text">{{ resume.company }}</v-title>
          <v-title is="h5" color="text-80">{{ resume.role }}</v-title>
          <div class="resume-block__about">
            <p>{{ resume.about.target }}</p>
            <p v-if="resume.about.command">Состав команды: {{ resume.about.command }}</p>
          </div>
          <div class="resume-block__task">
            <p>Задачи:</p>
            <ol class="resume-block__task-list">
              <li v-for="(task, i) of resume.task" :key="i">
                {{ task }}
              </li>
            </ol>
          </div>

          <p>- Стек технологий: {{ resume.tech }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VTitle } from '@components/ui';
import { RESUME_LIST } from '@components/experience-block/const';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useScreenSize } from '@/composables';

import dateFormat from '@/helpers/format';

dayjs.extend(relativeTime);

const { isMobile } = useScreenSize();

const getWorkTime = (startDate: Date, endDate: Date = new Date()) => {
  return dayjs(startDate).from(endDate, true);
};

const dateToString = (startDate: Date, endDate?: Date) => {
  const template = 'MMMM YYYY';

  const start = dateFormat(startDate, template);
  const end = endDate ? dateFormat(endDate, template) : 'По настоящее время';

  return `${start} — ${end}`;
};
</script>

<style lang="scss" scoped src="./experience-block.scss" />
