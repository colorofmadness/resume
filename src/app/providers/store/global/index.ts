import { defineStore } from 'pinia';
import { useDark } from '@vueuse/core';

import { useIsOpen } from '@shared/lib/composables';

const useGlobalStore = defineStore('global', () => {
  const { isOpen, openModal, closeModal } = useIsOpen(false);

  const isDark = useDark({
    attribute: 'data-theme',
    selector: 'html',
    valueDark: 'dark',
    valueLight: 'light',
    disableTransition: false
  });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    isOpen,
    toggleTheme,
    openModal,
    closeModal
  };
});

export default useGlobalStore;
