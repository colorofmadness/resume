import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useIsOpen } from '@shared/lib/composables';

const useUiStore = defineStore('ui', () => {
    const { isOpen, openModal, closeModal } = useIsOpen(false);
    const isLoaded = ref(false);

    return {
        isOpen,
        openModal,
        closeModal,
        isLoaded
    };
});

export default useUiStore;

