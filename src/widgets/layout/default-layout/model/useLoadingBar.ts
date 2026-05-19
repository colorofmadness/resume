import { ref } from 'vue';

import useUiStore from '@shared/model/ui';

const useLoadingBar = () => {
  const store = useUiStore();
  const showLoader = ref(true);

  const onLoaderComplete = () => {
    showLoader.value = false;
    store.isLoaded = true;
  };

  return { showLoader, onLoaderComplete };
};

export default useLoadingBar;
