import { computed, ref, watch } from 'vue';
import { useEventListener, useMouse } from '@vueuse/core';
import gsap from 'gsap';

const SPLITTER_INITIAL_PERCENT = 63;
const OFFSET_SCREEN = 58;
const HANDLE_WIDTH = 5;
const HANDLE_CIRCLE_RADIUS = 20;
const IDLE_AMPLITUDE = 200;
const IDLE_DURATION = 2.8;

const useSplitterDrag = () => {
  const { x, y } = useMouse();

  const offset = ref((window.innerWidth / 100 * SPLITTER_INITIAL_PERCENT) - OFFSET_SCREEN + HANDLE_CIRCLE_RADIUS);
  const top = ref(window.innerHeight / 2 - OFFSET_SCREEN * 2 + HANDLE_CIRCLE_RADIUS);

  const dragStartOffsetX = ref(0);
  const dragStartOffsetY = ref(0);
  const isDragging = ref(false);

  const handleStyle = computed(() => ({
    left: `${offset.value}px`,
    '--top': `${top.value}px`
  }));
  const topLayerStyle = computed(() => ({
    width: `${offset.value}px`
  }));

  const initialOffset = offset.value;

  const idleTween = gsap.fromTo(
    offset,
    { value: initialOffset - IDLE_AMPLITUDE },
    { value: initialOffset + IDLE_AMPLITUDE, duration: IDLE_DURATION, ease: 'sine.inOut', yoyo: true, repeat: -1 }
  );

  idleTween.progress(0.5);

  watch([x, y], ([newX, newY]) => {
    if (!isDragging.value) return;

    const newOffset = newX - dragStartOffsetX.value;
    const newTop = newY - dragStartOffsetY.value;

    offset.value = Math.min(
      Math.max(0, newOffset),
      window.innerWidth - OFFSET_SCREEN - HANDLE_WIDTH
    );
    top.value = Math.min(
      Math.max(0, newTop),
      window.innerHeight - OFFSET_SCREEN * 2 + HANDLE_CIRCLE_RADIUS
    );
  });

  const onDragStart = () => {
    idleTween.kill();
    isDragging.value = true;
    dragStartOffsetX.value = x.value - offset.value;
    dragStartOffsetY.value = y.value - top.value;
  };

  useEventListener(document, 'mouseup', () => {
    isDragging.value = false;
  });

  return {
    handleStyle,
    topLayerStyle,
    onDragStart
  };
};

export default useSplitterDrag;
