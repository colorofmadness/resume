<template>
  <router-view v-slot="{ Component }">
    <!--    <v-header />-->
    <transition mode="out-in" name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';

import useGlobalStore from '@/store/global';

useGlobalStore();
</script>
