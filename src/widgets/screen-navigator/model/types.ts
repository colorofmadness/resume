import type { TLink } from '@shared/config/nav-links';

export type TNavigator = {
  links: TLink[]
}

export interface IScreenViewerProps extends TNavigator {
  isOpen: boolean;
  currentId?: string;
}