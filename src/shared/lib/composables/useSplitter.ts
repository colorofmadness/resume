import { computed, ref, watch } from 'vue';
import { useMouse } from '@vueuse/core';

const OFFSET_SCREEN = 58;
const HANDLE_WIDTH = 5;
const HANDLE_CIRCLE_RADIUS = 20;

const useSplitter = () => {
  const { x, y } = useMouse();

  const offset = ref(window.innerWidth / 2 - OFFSET_SCREEN + HANDLE_WIDTH);
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
    isDragging.value = true;
    dragStartOffsetX.value = x.value - offset.value;
    dragStartOffsetY.value = y.value - top.value;
  };
  const onDragEnd = () => {
    isDragging.value = false;
  };

  return {
    handleStyle,
    topLayerStyle,
    onDragStart,
    onDragEnd
  };
};

export default useSplitter;
