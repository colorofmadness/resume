import { nextTick, ref } from 'vue';
import gsap from 'gsap';

import useGlobalStore from '@/store/global';

const useChangeTheme = () => {
  const isPending = ref(false);
  const store = useGlobalStore();
  const { toggleTheme } = store;

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

    tl.from('.transition-grid__element', {
      scale: 0,
      borderRadius: '50%',
      ease: 'power1.inOut',
      background: 'var(--text)',
      stagger: {
        grid: [0, 10],
        amount: 1.5
      },
      onComplete: toggleTheme
    })
      .to('.transition-grid__element', {
        delay: 0.5,
        scale: 0,
        background: 'var(--text)',
        borderRadius: '50%',
        ease: 'power1.inOut',
        stagger: {
          grid: [0, 10],
          amount: 1.5
        }
      })
      .set('.transition-grid__element', {
        clearProps: 'all'
      });
  };

  return { changeTheme, isPending };
};

export default useChangeTheme;
