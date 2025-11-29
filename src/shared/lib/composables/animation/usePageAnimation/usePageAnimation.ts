import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';

import useGlobalStore from '@app/providers/store/global';

import { LINKS, type TLink } from '@shared/config/nav-links';

import animation from './animation';

const findLinkById = (routeName: string): TLink | undefined => {
  return LINKS.find((el) => el.id === routeName);
};

const usePageAnimation = () => {
  const route = useRoute();
  const store = useGlobalStore();
  const { openModal } = store;
  const currentLink = computed(() => findLinkById(String(route.name)));

  watch(
    currentLink,
    (value, oldValue) => {
      if (value !== oldValue) {
        let timeout = 0;
        if (oldValue) {
          animation(oldValue);
          timeout = 300;
        }

        if (!value) return;
        setTimeout(() => animation(value), timeout);
      }
    },
    { flush: 'pre' }
  );

  onMounted(() => {
    if (currentLink.value) {
      openModal();
    }
  });

  return {
    LINKS,
    currentLink
  };
};

export default usePageAnimation;
