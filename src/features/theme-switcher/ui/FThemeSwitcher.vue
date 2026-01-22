<template>
  <button :class="$style['switch']" @click="changeTheme">
    <SIcon :name="computedIcon" :size="18" />

    <Teleport to="#teleports">
      <div v-if="isPending" :class="$style['transition-grid']">
        <div
          v-for="i of isMobile ? 25 : 100"
          :key="i"
          :class="$style['transition-grid__element']"
          data-grid
        />
      </div>
    </Teleport>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import useThemeStore from '@shared/model/theme';
import { useScreenSize } from '@shared/lib/composables';
import SIcon from '@shared/ui/icon';

import useTheme from '../model/useTheme';

const store = useThemeStore();
const { isDark } = storeToRefs(store);
const { isMobile } = useScreenSize();

const computedIcon = computed(() => {
  return isDark.value ? 'header/sun' : 'header/moon';
});

const { changeTheme, isPending } = useTheme();
</script>

<style lang="postcss" module src="../style.module.pcss" />
