import type { TScreenLink } from './links';

export type TNavigator = {
  links: TScreenLink[]
}

export interface IScreenViewerProps extends TNavigator {
  isOpen: boolean;
  currentId?: string;
}