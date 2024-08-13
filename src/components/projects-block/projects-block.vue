<template>
  <div class="container">
    <v-title>Проекты</v-title>
    <div class="project-broken">
      <v-icon :height="350" :width="555" name="project/broken" />
      <v-title is="h3" color="text">Эта вещь сломана</v-title>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VIcon, VTitle } from '@components/ui';
</script>

<style lang="scss" scoped src="./projects-block.scss" />
