import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';

import useGlobalStore from '@app/providers/store/global';

import { LINKS, type TLinks } from '@shared/config/nav-links';

import animation from './animation';

const findLinkById = (routeName: string): TLinks | undefined => {
  return LINKS.find((el) => el.id === routeName);
};

const usePageAnimation = () => {
  const store = useGlobalStore();
  const { openModal, closeModal } = store;
  const route = useRoute();

  const currentLink = computed(() => findLinkById(String(route.name)));

  const openMenu = (link: TLinks) => {
    if (!link) return;
    animation('current', link.id, link.style['--span']);
    openModal();
  };
  const closeMenu = (link: TLinks) => {
    if (!link) return;
    animation(link.id, 'current', link.style['--span']);
    closeModal();
  };

  watch(currentLink, (value, oldValue) => {
    if (value !== oldValue) {
      let timeout = 0;
      if (oldValue) {
        openMenu(oldValue);
        timeout = 300;
      }

      if (!value) return;
      setTimeout(() => closeMenu(value), timeout);
    }
  });
  onMounted(() => {
    if (currentLink.value) {
      closeMenu(currentLink.value);
    }
  });

  return {
    LINKS,
    currentLink
  };
};

export default usePageAnimation;
