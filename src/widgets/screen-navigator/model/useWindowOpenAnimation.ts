import gsap from 'gsap';
import { storeToRefs } from 'pinia';
import { onMounted, useTemplateRef, watch } from 'vue';

import useUiStore from '@shared/model/ui';

const SCREEN_ORDER = ['resume', 'about', 'projects', 'contacts'];

const useWindowOpenAnimation = () => {
  const gridRef = useTemplateRef<HTMLElement | null>('grid');
  const { isOpen, isLoaded } = storeToRefs(useUiStore());

  onMounted(() => {
    if (!gridRef.value) return;

    const screens = SCREEN_ORDER.map((id) => gridRef.value!.querySelector(`#${id}`)).filter(
      Boolean
    );

    if (isOpen.value) return;

    gsap.set(screens, {
      scale: 0,
      opacity: 0,
      transformOrigin: '50% 50%',
      willChange: 'transform, opacity'
    });

    watch(
      () => isLoaded.value,
      (loaded) => {
        if (!loaded) return;

        gsap.to(screens, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: 'power3.out',
          stagger: 0.12,
          onComplete: () => {
            gsap.set(screens, { willChange: 'auto' });
          }
        });
      },
      { immediate: true }
    );
  });
};

export default useWindowOpenAnimation;
