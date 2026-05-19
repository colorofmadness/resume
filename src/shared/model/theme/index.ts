import { defineStore } from 'pinia';
import { useDark } from '@vueuse/core';

const useThemeStore = defineStore('theme', () => {
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
    toggleTheme
  };
});

export default useThemeStore;
