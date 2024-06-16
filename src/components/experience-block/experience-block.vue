<template>
  <div class="exp-block">
    <div class="exp-block__title">
      <v-title>Опыт работы</v-title>
      <v-title :is="'h2'" color="text-80">4 года 1 месяц</v-title>
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
          <p>Frontend-разработка интерфейса CRM и web приложения</p>
          <p>- Роль: Тех.лид, frontend-разработчик</p>
          <p>- Состав команды: NDA</p>
          <p>Задачи:</p>
          <ol>
            <li>
              Web-приложение электронного меню для заведений: создание корзины, оформление заказа,
              вызов сотрудников, полная и раздельная оплата заказа
            </li>
            <li>CRM-система для управления заведениями и их подключения</li>
            <li>Составление плана работ в команде</li>
            <li>Подготовка проекта для передачи в работу команде</li>
            <li>Консультация по вариантам решения задач</li>
            <li>Распределение задач между разработчиками</li>
            <li>Код ревью участников команды</li>
            <li>Подготовка кода к деплою</li>
          </ol>
          <p>- Цель проекта: NDA</p>
          <p>- Стек технологий: Vue3/TypeScript, vite, scss, PWA, Laravel.</p>
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
import ru from 'dayjs/locale/ru';

dayjs.extend(relativeTime);
dayjs.locale(ru);

const getWorkTime = (startDate: Date, endDate: Date = new Date()) => {
  return dayjs(startDate).from(endDate, true);
};

const dateToString = (startDate: Date, endDate?: Date) => {
  const template = 'MMMM YYYY';

  const start = dayjs(startDate).format(template);
  const end = endDate ? dayjs(endDate).format(template) : 'По настоящее время';

  return `${start} — ${end}`;
};
</script>

<style lang="scss" scoped src="./experience-block.scss" />
