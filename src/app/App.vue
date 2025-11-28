<template>
  <RouterView v-slot="{ Component }">
    <Transition mode="out-in" name="fade">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>
