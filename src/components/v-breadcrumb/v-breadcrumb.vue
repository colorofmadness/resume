<template>
  <div :class="$style.breadcrumb">
    {{ displayedPage }}<span :class="$style['breadcrumb-ext']">{{ displayedExt }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { onUnmounted, ref, watch } from 'vue';

const currentRoute = useRoute();
const typingSpeed = 100;
const displayedPage = ref('');
const displayedExt = ref('');

let animationController: AbortController;

const stopAllAnimations = () => {
  if (animationController) {
    animationController.abort();
  }
};

const animateText = (text: string, onUpdate: (char: string) => void, signal: AbortSignal) => {
  if (!text || signal.aborted) return;

  let index = 0;
  const start = performance.now();

  const frame = (time: number) => {
    if (signal.aborted) return;

    const elapsed = time - start;
    const newIndex = Math.min(Math.floor(elapsed / typingSpeed), text.length);

    if (newIndex > index) {
      index = newIndex;
      onUpdate(text.slice(0, index));
    }

    if (index < text.length && !signal.aborted) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

const startAnimation = (breadcrumb?: string) => {
  stopAllAnimations();

  animationController = new AbortController();
  const { signal } = animationController;

  if (!breadcrumb) {
    displayedPage.value = '';
    displayedExt.value = '';
    return;
  }

  const [page, ext] = breadcrumb.split('.');
  const pageText = page || '';
  const extText = ext ? `.${ext}` : '';

  displayedPage.value = '';
  displayedExt.value = '';

  if (pageText) {
    animateText(
      pageText,
      (text) => {
        if (!signal.aborted) displayedPage.value = text;
      },
      signal
    );
  }

  if (extText) {
    const timeoutId = window.setTimeout(
      () => {
        if (!signal.aborted) {
          animateText(
            extText,
            (text) => {
              if (!signal.aborted) displayedExt.value = text;
            },
            signal
          );
        }
      },
      pageText.length * typingSpeed + 200
    );

    signal.addEventListener('abort', () => {
      clearTimeout(timeoutId);
    });
  }
};

onUnmounted(stopAllAnimations);

watch(() => currentRoute.meta?.breadcrumb, startAnimation, { immediate: true });
</script>

<style lang="postcss" module src="./v-breadcrumb.module.pcss" />
