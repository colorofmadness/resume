import { onUnmounted, ref } from 'vue';

const useTypewriterAnimation = (speed: number = 80) => {
  const displayedText = ref<string>('');
  let animationFrameId: number;

  const stopAllAnimations = () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    displayedText.value = '';
  };

  const animateText = (text: string, onUpdate?: (char: string) => void) => {
    return new Promise<void>((resolve, reject) => {
      if (!text) {
        displayedText.value = '';
        reject();
        return;
      }

      let index = 0;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        index = Math.min(Math.floor(elapsed / speed), text.length);

        const currentText = text.slice(0, index);
        displayedText.value = currentText;
        onUpdate?.(currentText);

        if (index < text.length) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    });
  };

  onUnmounted(stopAllAnimations);

  return {
    displayedText,
    animateText,
    stopAllAnimations
  };
};

export default useTypewriterAnimation;
