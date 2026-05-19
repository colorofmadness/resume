<template>
  <WInnerLayout>
    <WAboutSplitter />
  </WInnerLayout>
</template>

<script lang="ts" setup>
import WAboutSplitter from '@widgets/about-splitter';
import WInnerLayout from '@widgets/layout/inner-layout';

import { provideAboutNav } from '@features/about-nav';

provideAboutNav();
</script>
