<template>
  <div :class="$style['resume-block']">
    <div :class="$style['resume-block__date']">
      <STitle is="h4" color="text">
        {{ formattedDateRange }}
      </STitle>
      <span>{{ duration }}</span>
    </div>
    <div :class="$style['resume-block__container']">
      <STitle is="h4" color="text">{{ resume.company }}</STitle>
      <STitle is="h5" color="text-80">
        <span v-html="resume.role"></span>
      </STitle>
      <p v-if="resume.city || resume.site" :class="$style['resume-block__info']">
        {{ resume.city }},
        <a v-if="resume.site" :href="`https://${resume.site}`" target="_blank">
          {{ resume.site }}
        </a>
      </p>
      <div
        v-for="(about, index) of resume.about"
        :key="index"
        :class="$style['resume-block__item']"
      >
        <div :class="$style['resume-block__about']">{{ about.target }}:</div>
        <div v-if="about.task?.length" :class="$style['resume-block__task']">
          <ol :class="$style['resume-block__task-list']">
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
import { computed } from 'vue';

import STitle from '@shared/ui/title';
import { dateFormat, getWorkTime } from '@shared/lib/utils/format';

import type { IResumeProps } from '../model/types';

const props = defineProps<IResumeProps>();

const formattedDateRange = computed(() => {
  const template = 'MMMM YYYY';
  const start = dateFormat(props.resume.date.start, template);
  const end = props.resume.date.end
    ? dateFormat(props.resume.date.end, template)
    : 'По настоящее время';
  return `${start} — ${end}`;
});

const duration = computed(() =>
  getWorkTime(props.resume.date.start, props.resume.date.end)
);

</script>

<style lang="postcss" module src="../styles.module.pcss" />
