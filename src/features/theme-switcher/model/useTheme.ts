import { computed, nextTick, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

import useThemeStore from '@shared/model/theme';
import useScreenSize from '@shared/lib/composables/useScreenSize';

const AMOUNT = 0.5;

const useTheme = () => {
  const isPending = ref(false);
  const { toggleTheme } = useThemeStore();
  const { isMobile } = useScreenSize();

  const grid = computed(() => (isMobile.value ? 5 : 10));

  let tl: gsap.core.Timeline | null = null;

  const changeTheme = async () => {
    if (isPending.value) return;
    isPending.value = true;

    await nextTick();

    const cols = grid.value;
    const elements = gsap.utils.toArray<Element>('[data-grid]');
    if (!elements.length) {
      isPending.value = false;
      return;
    }
    const rows = Math.ceil(elements.length / cols);
    const staggerConfig = {
      grid: [rows, cols] as [number, number],
      amount: AMOUNT,
      from: (rows - 1) * cols
    };

    tl = gsap.timeline({
      defaults: { duration: 0.4 },
      onComplete: () => {
        isPending.value = false;
      }
    });

    tl.from(elements, {
      scale: 0,
      borderRadius: '50%',
      ease: 'power1.inOut',
      background: 'var(--text)',
      stagger: staggerConfig,
      onComplete: toggleTheme
    })
      .to(elements, {
        delay: 0.2,
        scale: 0,
        background: 'var(--text)',
        borderRadius: '50%',
        ease: 'power1.inOut',
        stagger: staggerConfig
      })
      .set(elements, { clearProps: 'all' });
  };

  onUnmounted(() => tl?.kill());

  return { changeTheme, isPending };
};

export default useTheme;
