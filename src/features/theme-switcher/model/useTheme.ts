import { computed, nextTick, ref } from 'vue';
import gsap from 'gsap';
import useGlobalStore from '@app/providers/store/global';

import useScreenSize from '@shared/lib/composables/useScreenSize';

const useTheme = () => {
  const isPending = ref(false);
  const store = useGlobalStore();
  const { toggleTheme } = store;
  const { isMobile } = useScreenSize();

  const grid = computed(() => (isMobile.value ? 5 : 10));
  const amount = computed(() => (isMobile.value ? 1 : 1.5));

  const changeTheme = async () => {
    isPending.value = true;

    await nextTick();

    const tl = gsap.timeline({
      defaults: {
        duration: 1
      },
      onComplete: () => {
        isPending.value = false;
      }
    });

    tl.from('[data-grid]', {
      scale: 0,
      borderRadius: '50%',
      ease: 'power1.inOut',
      background: 'var(--text)',
      stagger: {
        grid: [0, grid.value],
        amount: amount.value
      },
      onComplete: toggleTheme
    })
      .to('[data-grid]', {
        delay: 0.5,
        scale: 0,
        background: 'var(--text)',
        borderRadius: '50%',
        ease: 'power1.inOut',
        stagger: {
          grid: [0, grid.value],
          amount: amount.value
        }
      })
      .set('[data-grid]', {
        clearProps: 'all'
      });
  };

  return { changeTheme, isPending };
};

export default useTheme;
