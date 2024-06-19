<template>
  <div class="switch" @click="store.changeTheme()">
    <v-icon :name="computedIcon" :size="18" />
  </div>
</template>

<script lang="ts" setup>
import { VIcon } from '@components/ui';
import { computed } from 'vue';

import useGlobalStore from '@/store/global';

const store = useGlobalStore();

const computedIcon = computed(() => {
  return store.isDark ? 'header/sun' : 'header/moon';
});
</script>

<style lang="scss" scoped src="./v-theme-switch.scss" />
