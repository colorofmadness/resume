import gsap from 'gsap';
import { onMounted, ref, useTemplateRef } from 'vue';

const useLoaderAnimation = (onComplete: () => void) => {
  const progress = ref(0);

  const overlayRef = useTemplateRef<HTMLElement>('overlay');
  const loaderRef = useTemplateRef<HTMLElement>('loader');
  const barRef = useTemplateRef<HTMLElement>('bar');
  const fillRef = useTemplateRef<HTMLElement>('fill');
  const borderRef = useTemplateRef<HTMLElement>('border');

  onMounted(() => {
    if (
      !overlayRef.value ||
      !loaderRef.value ||
      !borderRef.value ||
      !barRef.value ||
      !fillRef.value
    )
      return;

    const tl = gsap.timeline();

    tl.to(progress, {
      value: 100,
      duration: 1,
      ease: 'power1.in'
    });

    tl.to(fillRef.value, { opacity: 0, duration: 0.1 })
      .to(fillRef.value, { opacity: 1, duration: 0.1 })
      .to(fillRef.value, { opacity: 0, duration: 0.1 })
      .to(fillRef.value, { opacity: 1, duration: 0.1 })
      .to(loaderRef.value, { autoAlpha: 0, duration: 0.1 });

    tl.call(() => {
      if (!barRef.value || !borderRef.value || !overlayRef.value) return;
      const rect = barRef.value.getBoundingClientRect();

      gsap.set(overlayRef.value, { backgroundColor: 'transparent' });

      gsap.set(borderRef.value, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        opacity: 1
      });
    });

    const styles = getComputedStyle(document.documentElement);
    const framePadding = parseFloat(styles.getPropertyValue('--frame-padding'));
    const frameRadius = parseFloat(styles.getPropertyValue('--frame-radius'));

    tl.to(borderRef.value, {
      top: framePadding,
      left: framePadding,
      width: window.innerWidth - framePadding * 2,
      height: window.innerHeight - framePadding * 2,
      borderRadius: frameRadius,
      duration: 1,
      ease: 'power2.inOut'
    });

    tl.to(borderRef.value, {
      opacity: 0,
      duration: 0.15,
      onComplete
    });
  });

  return { progress };
};

export default useLoaderAnimation;
