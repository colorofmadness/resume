import { useBreakpoints } from '@vueuse/core';
import type { ComputedRef } from 'vue';
import { computed } from 'vue';

export type TResolutions = 'mobile' | 'desktop' | 'tablet' | 'laptop';
const breakpoints: Record<TResolutions, number> = {
  mobile: 0,
  tablet: 768,
  laptop: 1280,
  desktop: 1600
};

const useScreenSize = () => {
  const screenSize = useBreakpoints<TResolutions>(breakpoints);

  const activeBreakpoint: ComputedRef<TResolutions> =
    screenSize.active() as ComputedRef<TResolutions>;

  const isMobile = computed(() => activeBreakpoint.value === 'mobile');
  const isTablet = computed(() => activeBreakpoint.value === 'tablet');

  return {
    activeBreakpoint,
    isMobile,
    isTablet
  };
};

export default useScreenSize;
