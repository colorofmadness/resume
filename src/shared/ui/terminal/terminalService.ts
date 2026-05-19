import { useEventBus } from '@vueuse/core';

import type { TTypeBusListener } from './types';

export default useEventBus<TTypeBusListener>('terminal');
