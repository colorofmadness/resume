<template>
  <div :class="$style['contacts-block']">
    <div :class="$style['contacts-block__container']">
      <div :class="$style['contacts-block__col']">
        <EContactQr
          :href="CONTACT_LINKS.telegram.href"
          :icon-name="CONTACT_LINKS.telegram.icon"
          :label="CONTACT_LINKS.telegram.label"
        />
      </div>
      <div :class="$style['contacts-block__col']">
        <EContactQr
          :href="CONTACT_LINKS.phone.href"
          :icon-name="CONTACT_LINKS.phone.icon"
          :label="CONTACT_LINKS.phone.label"
        />
        <EContactQr
          :href="CONTACT_LINKS.github.href"
          :icon-name="CONTACT_LINKS.github.icon"
          :label="CONTACT_LINKS.github.label"
        />
      </div>
      <div :class="$style['contacts-block__col']">
        <SCard
          v-if="activeBreakpoint === 'desktop'"
          color="primary-15"
        />
        <EContactQr
          :href="CONTACT_LINKS.email.href"
          :icon-name="CONTACT_LINKS.email.icon"
          :label="CONTACT_LINKS.email.label"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EContactQr from '@entities/contacts';

import SCard from '@shared/ui/card';
import { useScreenSize } from '@shared/lib/composables';
import { CONTACT_LINKS } from '@shared/config/contacts';

const { activeBreakpoint } = useScreenSize();
</script>

<style module src="../styles.module.pcss" />