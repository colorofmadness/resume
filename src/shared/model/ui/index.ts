import { defineStore } from 'pinia';

import { useIsOpen } from '@shared/lib/composables';

const useUiStore = defineStore('ui', () => {
    const { isOpen, openModal, closeModal } = useIsOpen(false);

    return {
        isOpen,
        openModal,
        closeModal
    };
});

export default useUiStore;

