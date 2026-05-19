import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useIsOpen } from '@shared/lib/composables';

const useUiStore = defineStore('ui', () => {
  const { isOpen, openModal, closeModal } = useIsOpen(false);
  const isLoaded = ref(false);
  const isResized = ref(false);

  const toggleResize = () => {
    isResized.value = !isResized.value;
  };

  return {
    isOpen,
    openModal,
    closeModal,
    isLoaded,
    isResized,
    toggleResize
  };
});

export default useUiStore;
