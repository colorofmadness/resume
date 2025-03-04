<template>
  <div class="exp-block container">
    <div class="exp-block__title">
      <v-title :is="isMobile ? 'h2' : 'h1'">Опыт работы</v-title>
      <v-title :is="isMobile ? 'h3' : 'h2'" color="text-80">
        {{ getWorkTime(new Date(2020, 5, 1)) }}
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
          <p v-if="resume.city || resume.site" class="resume-block__info">
            {{ resume.city }},
            <a v-if="resume.site" :href="`https://${resume.site}`" target="_blank">
              {{ resume.site }}
            </a>
          </p>
          <div v-for="(about, index) of resume.about" :key="index" class="resume-block__item">
            <div class="resume-block__about">
              <p>{{ index + 1 }}. {{ about.target }}</p>
              <p v-if="about.command">- Состав команды: {{ about.command }}</p>
            </div>
            <div v-if="about.task?.length" class="resume-block__task">
              <p>- Задачи:</p>
              <ol class="resume-block__task-list">
                <li v-for="(task, i) of about.task" :key="i">
                  {{ task }}
                </li>
              </ol>
            </div>

            <p v-if="about.tech">- Стек технологий: {{ about.tech }}</p>
          </div>
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

import { dateFormat, declOfNum } from '@/helpers/format';

dayjs.extend(relativeTime);

const { isMobile } = useScreenSize();

const getTimeForm = (value: number, unit: 'mount' | 'year') => {
  const titles = unit === 'year' ? ['год', 'года', 'лет'] : ['месяц', 'месяца', 'месяцев'];

  return `${value} ${declOfNum(value, titles)}`;
};

const getWorkTime = (startDate: Date, endDate: Date = new Date()) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const years = end.diff(start, 'year');

  const months = end.subtract(years, 'year').diff(start, 'month');

  const adjustedYears = years + (months >= 0 ? 0 : -1);
  const adjustedMonths = months >= 0 ? months + 1 : months + 12;

  const parts = [];

  if (adjustedYears > 0) {
    parts.push(getTimeForm(adjustedYears, 'year'));
  }

  if (adjustedMonths > 0) {
    parts.push(getTimeForm(adjustedMonths, 'mount'));
  }

  if (adjustedYears === 0 && adjustedMonths === 12) {
    return '1 год';
  }

  return parts.length > 0 ? parts.join(' ') : '0 лет';
};

const dateToString = (startDate: Date, endDate?: Date) => {
  const template = 'MMMM YYYY';

  const start = dateFormat(startDate, template);
  const end = endDate ? dateFormat(endDate, template) : 'По настоящее время';

  return `${start} — ${end}`;
};
</script>

<style lang="scss" scoped src="./experience-block.scss" />
