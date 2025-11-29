<template>
  <nav :class="$style.navigation">
    <ul :class="$style['navigation__list']">
      <li
        v-for="link of links"
        :key="link.id"
        :class="$style['navigation__list-item']"
        :style="link.style"
      >
        <RouterLink
          :class="$style['navigation__list-link']"
          :title="link.name"
          :to="{ name: link.id }"
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { TNavigator } from '../model/types';

defineProps<TNavigator>();
</script>

<style lang="postcss" module src="../styles.module.pcss" />