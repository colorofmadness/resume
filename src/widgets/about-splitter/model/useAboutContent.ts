import { computed } from 'vue';

import { useAboutNav } from '@features/about-nav';

import { workContent, lifeContent } from './content';

const useAboutContent = () => {
  const { selected } = useAboutNav();

  const workBlock = computed(() => workContent[selected.value]);
  const lifeBlock = computed(() => lifeContent[selected.value]);

  return { workBlock, lifeBlock };
};

export default useAboutContent;
