<template>
  <label class="switch" for="theme">
    <input id="theme" v-model="store.isDark" tabindex="1" type="checkbox" />
    <span class="slider" />
    <span class="line" />
  </label>
</template>

<script lang="ts" setup>
import useGlobalStore from '@/store/global';

const store = useGlobalStore();
</script>

<style lang="scss" scoped src="./v-theme-switch.scss" />
