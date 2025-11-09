<template>
  <div :class="$style['switch']" @click="changeTheme">
    <v-icon :name="computedIcon" :size="18" />

    <teleport to="#teleports">
      <div v-if="isPending" :class="$style['transition-grid']">
        <div
          v-for="i of isMobile ? 25 : 100"
          :key="i"
          :class="$style['transition-grid__element']"
          data-grid
        />
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useChangeTheme from '@composables/useChangeTheme';

import { useScreenSize } from '@/composables';

import useGlobalStore from '@/store/global';

const store = useGlobalStore();
const { isDark } = storeToRefs(store);
const { isMobile } = useScreenSize();

const computedIcon = computed(() => {
  return isDark.value ? 'header/sun' : 'header/moon';
});

const { changeTheme, isPending } = useChangeTheme();
</script>

<style lang="postcss" module src="./v-theme-switch.module.pcss" />
