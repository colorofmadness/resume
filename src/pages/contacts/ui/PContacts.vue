<template>
  <div :class="$style['contacts-block']">
    <div :class="$style['contacts-block__container']">
      <div :class="$style['contacts-block__col']">
        <SCard color="primary-5">
          <EContactQr
            href="https://t.me/colorofmadness"
            icon-qr-name="contacts/telegram"
            link-name="@colorofmadness"
          />
        </SCard>
      </div>
      <div :class="$style['contacts-block__col']">
        <SCard color="primary-5">
          <EContactQr
            href="tel:79026423467"
            icon-qr-name="contacts/phone"
            link-name="+7 (902) 642-34-67"
          />
        </SCard>
        <SCard color="primary-5">
          <EContactQr
            href="https://github.com/colorofmadness"
            icon-qr-name="contacts/gitqr"
            link-name="github.com/colorofmadness"
          />
        </SCard>
      </div>
      <div :class="$style['contacts-block__col']">
        <SCard v-if="activeBreakpoint === 'desktop'" color="primary-15" />
        <SCard color="primary-5">
          <EContactQr
            href="mailto:vladandmir.ya@gmail.com"
            icon-qr-name="contacts/mail"
            link-name="vladandmir.ya@gmail.com"
          />
        </SCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EContactQr from '@entities/contacts';

import { SCard } from '@shared/ui';
import { useScreenSize } from '@shared/lib/composables';

const { activeBreakpoint } = useScreenSize();
</script>

<style lang="postcss" module src="../PContacts.pcss" />
