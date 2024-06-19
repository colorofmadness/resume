import { defineStore } from 'pinia';
import { useDark } from '@vueuse/core';
import gsap from 'gsap';
import { useIsOpen } from '@/composables';

const useGlobalStore = defineStore('global', () => {
  const { isOpen, openModal, closeModal } = useIsOpen(true);
  const isDark = useDark({
    attribute: 'data-theme',
    selector: 'html',
    valueDark: 'dark',
    valueLight: 'light',
    disableTransition: false
  });

  const changeTheme = () => {
    const transitionElement = document.getElementById('transition-element');

    if (transitionElement) {
      const tl = gsap.timeline();

      tl.set(transitionElement, {
        visibility: 'visible',
        xPercent: -100,
        borderTopRightRadius: '50vh',
        borderBottomRightRadius: '50vh',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
      })
        .to(transitionElement, {
          xPercent: 0,
          duration: 0.8,
          onComplete: () => {
            isDark.value = !isDark.value;
          }
        })
        .to(
          transitionElement,
          {
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            duration: 0.4
          },
          '<'
        )
        .set(transitionElement, {
          xPercent: 0
        })
        .to(transitionElement, {
          xPercent: 100,
          duration: 0.8
        })
        .to(
          transitionElement,
          {
            borderTopLeftRadius: '50vh',
            borderBottomLeftRadius: '50vh',
            duration: 0.4
          },
          '<'
        );
    }
  };

  return {
    isDark,
    isOpen,
    changeTheme,
    openModal,
    closeModal
  };
});

export default useGlobalStore;
