<template>
  <div class="contacts-block">
    <div class="contacts-block__container">
      <div class="contacts-block__col">
        <v-card color="primary-5">
          <contact-qr
            href="https://t.me/colorofmadness"
            icon-qr-name="contacts/telegram"
            link-name="@colorofmadness"
          />
        </v-card>
      </div>
      <div class="contacts-block__col">
        <v-card color="primary-5">
          <contact-qr
            href="tel:79026423467"
            icon-qr-name="contacts/phone"
            link-name="+7 (902) 642-34-67"
          />
        </v-card>
        <v-card color="primary-5">
          <contact-qr
            href="https://github.com/colorofmadness"
            icon-qr-name="contacts/gitqr"
            link-name="github.com/colorofmadness"
          />
        </v-card>
      </div>
      <div class="contacts-block__col">
        <v-card v-if="activeBreakpoint === 'desktop'" color="primary-15" />
        <v-card color="primary-5">
          <contact-qr
            href="mailto:vladandmir.ya@gmail.com"
            icon-qr-name="contacts/mail"
            link-name="vladandmir.ya@gmail.com"
          />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VCard } from '@components/ui';
import ContactQr from '@components/contacts-block/contact-qr';
import { useScreenSize } from '@/composables';

const { activeBreakpoint } = useScreenSize();
</script>

<style lang="scss" scoped src="./contacts-block.scss" />
