<template>
  <WInnerLayout>
    <div :class="[$style['exp-block'], 'container']">
      <div :class="$style['exp-block__title']">
        <STitle :is="isMobile ? 'h2' : 'h1'">Опыт работы</STitle>
        <STitle :is="isMobile ? 'h3' : 'h2'" color="text-80">
          {{ getWorkTime(new Date(2020, 5, 1)) }}
        </STitle>
      </div>

      <div :class="$style['exp-block__content']">
        <resume-block v-for="(resume, key) of RESUME_LIST" :key="key" :resume="resume" />
      </div>
    </div>
  </WInnerLayout>
</template>

<script lang="ts" setup>
import WInnerLayout from '@widgets/layout/inner-layout';

import ResumeBlock, { RESUME_LIST } from '@entities/resume';

import { STitle } from '@shared/ui';
import { useScreenSize } from '@shared/lib/composables';
import { getWorkTime } from '@shared/lib/utils/format';

const { isMobile } = useScreenSize();
</script>

<style lang="postcss" module src="../style.module.pcss" />
