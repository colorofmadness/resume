import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

export const navLinks = ['about', 'journey', 'interests', 'skills', 'contacts'] as const;

export type NavLink = (typeof navLinks)[number];

export const navLinkLabels: Record<NavLink, string> = {
  about: 'Обо мне',
  journey: 'Путь',
  interests: 'Интересы',
  skills: 'Навыки',
  contacts: 'Контакты'
};

interface AboutNavContext {
  selected: Ref<NavLink>;
  navLinks: typeof navLinks;
  navLinkLabels: typeof navLinkLabels;
}

const ABOUT_NAV_KEY: InjectionKey<AboutNavContext> = Symbol('about-nav');

export const provideAboutNav = () => {
  const selected = ref<NavLink>(navLinks[0]);
  const context: AboutNavContext = { selected, navLinks, navLinkLabels };
  provide(ABOUT_NAV_KEY, context);
  return context;
};

const useAboutNav = () => {
  const context = inject(ABOUT_NAV_KEY);
  if (!context) {
    throw new Error('useAboutNav() requires provideAboutNav() in a parent component');
  }
  return context;
};

export default useAboutNav;
