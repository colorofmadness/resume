<template>
  <div class="resume-block">
    <div class="resume-block__date">
      <v-title is="h4" color="text">
        {{ dateToString(resume.date.start, resume.date.end) }}
      </v-title>
      <span>{{ getWorkTime(resume.date.start, resume.date.end) }}</span>
    </div>
    <div class="resume-block__container">
      <v-title is="h4" color="text">{{ resume.company }}</v-title>
      <v-title is="h5" color="text-80">
        <span v-html="resume.role"></span>
      </v-title>
      <p v-if="resume.city || resume.site" class="resume-block__info">
        {{ resume.city }},
        <a v-if="resume.site" :href="`https://${resume.site}`" target="_blank">
          {{ resume.site }}
        </a>
      </p>
      <div v-for="(about, index) of resume.about" :key="index" class="resume-block__item">
        <div class="resume-block__about">{{ about.target }}:</div>
        <div v-if="about.task?.length" class="resume-block__task">
          <ol class="resume-block__task-list">
            <li v-for="(task, i) of about.task" :key="i">
              {{ task }}
            </li>
          </ol>
        </div>
        <p v-if="about.achievement">Достижение: {{ about.achievement }}</p>
        <p v-if="about.command">Команда: {{ about.command }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VTitle } from '@components/ui';

import IResumeProps from '@components/experience-block/resume-block/types';

import { dateFormat, getWorkTime } from '@/helpers/format';

defineProps<IResumeProps>();

const dateToString = (startDate: Date, endDate?: Date) => {
  const template = 'MMMM YYYY';

  const start = dateFormat(startDate, template);
  const end = endDate ? dateFormat(endDate, template) : 'По настоящее время';

  return `${start} — ${end}`;
};
</script>

<style lang="scss" scoped src="./resume-block.scss" />
