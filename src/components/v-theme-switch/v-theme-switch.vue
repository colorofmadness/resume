<template>
  <div class="switch" @click="changeTheme">
    <v-icon :name="computedIcon" :size="18" />

    <teleport to="#teleports">
      <div v-if="isPending" class="transition-grid">
        <div v-for="i of isMobile ? 25 : 100" :key="i" class="transition-grid__element" />
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useChangeTheme from '@/composables/useChangeTheme';
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

<style lang="scss" scoped src="./v-theme-switch.scss" />
