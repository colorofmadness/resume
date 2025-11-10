<template>
  <w-default-layout>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </w-default-layout>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

import WDefaultLayout from '@widgets/default-layout/ui';
</script>
