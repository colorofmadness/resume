import gsap from 'gsap';
import { useElementBounding } from '@vueuse/core';

import useGlobalStore from '@/store/global';

const calculatePosition = (element: HTMLElement) => {
  const { top, left, width, height } = useElementBounding(element);
  return {
    top: top.value,
    left: left.value,
    width: width.value,
    height: height.value
  };
};

const animation = (fromId: string, toId: string, span: number) => {
  const store = useGlobalStore();

  const { body } = document;

  const toHero = document.getElementById(toId);
  const fromHero = document.getElementById(fromId);

  if (!toHero || !fromHero) return;

  const clone = fromHero.cloneNode(true) as HTMLElement;
  const from = calculatePosition(fromHero);
  const to = calculatePosition(toHero);

  const onComplete = () => {
    body.removeChild(clone);
  };

  const onStart = () => {
    body.appendChild(clone);
  };

  const tl = gsap.timeline({
    onComplete,
    onStart,
    defaults: {
      duration: 0.3,
      ease: 'power1'
    }
  });

  tl.set([fromHero, toHero], { visibility: 'hidden' })
    .fromTo(
      clone,
      {
        position: 'fixed',
        zIndex: 100,
        ...from
      },
      {
        x: to.left - from.left,
        y: to.top - from.top,
        width: to.width,
        height: to.height,
        borderWidth: store.isOpen ? '0px' : '1px'
      },
      'scale1'
    )
    .to(
      clone.querySelector('.card__header'),
      {
        translateY: store.isOpen ? '-100%' : 0,
        height: store.isOpen ? 0 : '40px',
        visibility: store.isOpen ? 'hidden' : 'visible',
        opacity: store.isOpen ? 0 : 1
      },
      'scale1'
    )
    .to(
      clone.querySelector('.section__content'),
      {
        borderRadius: store.isOpen ? 0 : 16,
        scale: store.isOpen ? 1 : (1 / 20) * span
      },
      'scale1'
    )
    .set(toHero, { visibility: 'visible' });
};

export default animation;
