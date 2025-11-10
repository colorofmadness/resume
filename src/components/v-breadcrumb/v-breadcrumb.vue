<template>
  <div :class="$style.breadcrumb">
    {{ pageAnimation.displayedText
    }}<span :class="$style['breadcrumb-ext']">{{ extAnimation.displayedText }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { useTypewriterAnimation } from '@composables';

const currentRoute = useRoute();
const TYPING_SPEED = 80;

const pageAnimation = useTypewriterAnimation(TYPING_SPEED);
const extAnimation = useTypewriterAnimation(TYPING_SPEED);

const startAnimation = (breadcrumb?: string) => {
  pageAnimation.stopAllAnimations();
  extAnimation.stopAllAnimations();

  if (!breadcrumb) return;

  const [pageText = '', extText = ''] = breadcrumb.split('.');

  if (pageText) {
    pageAnimation
      .animateText(pageText)
      .then(() => {
        if (extText) {
          extAnimation.animateText(`.${extText}`);
        }
      })
      .catch(() => console.error('Text animation failed'));
  }
};

watch(() => currentRoute.meta?.breadcrumb, startAnimation, { immediate: true });
</script>

<style lang="postcss" module src="./v-breadcrumb.module.pcss" />
