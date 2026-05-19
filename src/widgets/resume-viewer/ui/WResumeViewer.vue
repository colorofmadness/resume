<template>
  <div :class="[$style['resume'], 'container']">
    <div :class="$style['resume__title']">
      <STitle :is="isMobile ? 'h2' : 'h1'">Опыт работы</STitle>
      <STitle :is="isMobile ? 'h3' : 'h2'" color="text-80">
        {{ totalWorkTime }}
      </STitle>
    </div>

    <div :class="$style['resume__content']">
      <EResumeBlock
        v-for="(resume, key) of RESUME_LIST"
        :key="key"
        :resume="resume"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import EResumeBlock, { CAREER_START_DATE, RESUME_LIST } from '@entities/resume';

import STitle from '@shared/ui/title';
import { useScreenSize } from '@shared/lib/composables';
import { getWorkTime } from '@shared/lib/utils/format';

const { isMobile } = useScreenSize();

const totalWorkTime = computed(() => getWorkTime(CAREER_START_DATE));
</script>

<style module src="../styles.module.pcss" />