import gsap from 'gsap';
import Flip from 'gsap/Flip';
import { storeToRefs } from 'pinia';
import { nextTick } from 'vue';

import useUiStore from '@shared/model/ui';

import type { TScreenLink } from './links';

gsap.registerPlugin(Flip);

const animation = async (link: TScreenLink) => {
  const store = useUiStore();
  const { openModal, closeModal } = store;
  const { isOpen } = storeToRefs(store);

  if (!link) return;

  const fromHero = document.getElementById(link.id);
  if (!fromHero) return;

  const state = Flip.getState(fromHero, {
    props: 'borderRadius, border'
  });

  if (isOpen.value) {
    closeModal();
  } else {
    openModal();
  }

  await nextTick();

  Flip.from(state, {
    duration: 0.3,
    ease: 'power2.out',
    absolute: true,
    nested: false,
    scale: true,
    zIndex: 100
  });
};

export default animation;

