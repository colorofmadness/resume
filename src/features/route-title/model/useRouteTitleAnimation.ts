import { useRoute } from 'vue-router';
import { watch } from 'vue';

import { useTypewriterAnimation } from '@shared/lib/composables/animation';

const TYPING_SPEED = 80;

const useRouteTitleAnimation = () => {
  const currentRoute = useRoute();
  const pageAnimation = useTypewriterAnimation(TYPING_SPEED);
  const extAnimation = useTypewriterAnimation(TYPING_SPEED);

  const animateRoute = (breadcrumb: string) => {
    pageAnimation.stopAllAnimations();
    extAnimation.stopAllAnimations();

    if (!breadcrumb) return;

    const [pageText = '', extText = ''] = breadcrumb.split('.');

    if (pageText) {
      pageAnimation
        .animateText(pageText)
        .then(() => {
          if (extText) {
            extAnimation.animateText(`.${extText}`);
          }
        })
        .catch(() => console.error('Text animation failed'));
    }
  };

  watch(() => currentRoute.meta?.breadcrumb, animateRoute, { immediate: true });

  return { pageAnimation, extAnimation };
};

export default useRouteTitleAnimation;
