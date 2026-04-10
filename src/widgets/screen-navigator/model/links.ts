import { defineAsyncComponent, type Component } from 'vue';

import { LINKS as NAV_LINKS, type TLink as TNavLink } from '@shared/config/nav-links';

export type TScreenLink = TNavLink & {
  component: Component;
};

const componentById = {
  about: () => import('@pages/about'),
  resume: () => import('@pages/resume'),
  projects: () => import('@pages/projects'),
  contacts: () => import('@pages/contacts')
};

export const LINKS: TScreenLink[] = NAV_LINKS.map((link) => {
  const loader = componentById[link.id as keyof typeof componentById];

  return {
    ...link,
    component: defineAsyncComponent(loader)
  };
});

