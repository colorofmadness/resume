<template>
  <div class="ui">
    <v-icon name="search" size="16" @click="counterStore.increment()" />
    {{ counterStore.count }}
  </div>
</template>

<script lang="ts" setup>
import VIcon from '@ui/v-icon';

import useCounterStore from '@/store/counter';

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped src="./ui.scss"></style>
