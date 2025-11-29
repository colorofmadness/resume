import gsap from 'gsap';
import Flip from 'gsap/Flip';
import { storeToRefs } from 'pinia';
import { nextTick } from 'vue';

import useGlobalStore from '@app/providers/store/global';

import type { TLink } from '@shared/config/nav-links';

gsap.registerPlugin(Flip);

const animation = async (link: TLink) => {
  const store = useGlobalStore();
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
