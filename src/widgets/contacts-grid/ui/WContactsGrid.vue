<template>
  <div :class="$style['contacts-block']">
    <div :class="$style['contacts-block__grid']">
      <EContactQr
        v-for="(contact, key) in CONTACT_LINKS"
        :key="key"
        :href="contact.href"
        :icon-name="contact.icon"
        :label="contact.label"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EContactQr, { CONTACT_LINKS } from '@entities/contacts';
</script>

<style module src="../styles.module.pcss" />
