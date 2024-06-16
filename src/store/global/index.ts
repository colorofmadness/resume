import { defineStore } from 'pinia';
import { useDark } from '@vueuse/core';

const useGlobalStore = defineStore('global', () => {
  const isDark = useDark({
    attribute: 'data-theme',
    selector: 'html',
    valueDark: 'dark',
    valueLight: 'light',
    disableTransition: false
  });

  return { isDark };
});

export default useGlobalStore;
