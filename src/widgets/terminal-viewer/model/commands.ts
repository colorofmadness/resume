import { computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';

import PROJECTS_LIST from '@entities/project/model/projects';

import type { TTypeBusListener } from '@shared/ui/terminal';
import { TerminalService } from '@shared/ui/terminal';

import {
  getContactsHtml,
  getErrorHtml,
  getHelpHtml,
  getInfoHtml,
  getProjectDetailsHtml,
  getProjectListHtml,
  getSuccessHtml,
  getWelcomeHtml
} from './terminalTemplates';

const STORAGE_KEY = 'terminal-user';

export const username = useLocalStorage<string>(STORAGE_KEY, '');
export const isLogged = computed(() => !!username.value);

const runProject = (id?: string) => {
  if (!id) {
    TerminalService.emit('response', getErrorHtml('Укажите ID проекта (например, "run memory")'));
    return;
  }

  const project = PROJECTS_LIST.find((p) => p.id === id);
  if (!project) {
    TerminalService.emit('response', getErrorHtml(`Проект "${id}" не найден.`));
    return;
  }

  TerminalService.emit('response', getInfoHtml(`Запуск проекта "${project.name}"`));

  setTimeout(() => {
    TerminalService.emit('response', getInfoHtml('Установка зависимостей... OK'));
  }, 600);

  setTimeout(() => {
    TerminalService.emit('response', getInfoHtml('Запуск дев среды... OK'));
  }, 1000);

  setTimeout(() => {
    TerminalService.emit('response', getSuccessHtml('Приложение готово!', project.url));
  }, 1500);
};

const catProject = (id?: string): string | unknown => {
  if (!id) return getErrorHtml('Укажите ID проекта (например, "cat memory")');

  const project = PROJECTS_LIST.find((p) => p.id === id);
  if (!project) return getErrorHtml(`Проект "${id}" не найден. Введите "ls" для списка.`);

  return getProjectDetailsHtml(project);
};

const openResume = () => {
  const RESUME_URL = 'https://hh.ru/resume/1ab124d5ff1080185d0039ed1f47484e424552';
  TerminalService.emit('response', getInfoHtml('Открываю резюме...'));

  setTimeout(() => {
    TerminalService.emit('response', getSuccessHtml('Ссылка готова!', RESUME_URL));
  }, 1000);
};

const logout = () => {
  username.value = '';
  TerminalService.emit('clear', '');
};

const COMMANDS: Record<string, (arg?: string) => unknown> = {
  help: () => getHelpHtml(),
  ls: () => getProjectListHtml(PROJECTS_LIST),
  cat: catProject,
  run: runProject,
  clear: () => TerminalService.emit('clear', ''),
  resume: openResume,
  logout: () => logout(),
  contacts: () => getContactsHtml()
};

export const commandHandler = (event: TTypeBusListener, payload: string) => {
  if (event !== 'command') return;

  if (!isLogged.value) {
    const name = payload.trim();
    if (name) {
      username.value = name;
      TerminalService.emit('clear', '');
      TerminalService.emit('response', getWelcomeHtml(name));
    }
    return;
  }

  const trimmedPayload = payload.trim();
  const [cmdName, ...args] = trimmedPayload.split(/\s+/);
  const arg = args.join(' ');
  const action = COMMANDS[cmdName?.toLowerCase()];

  if (action) {
    const response = action(arg);
    if (response) {
      TerminalService.emit('response', response);
    }
  } else if (cmdName) {
    TerminalService.emit(
      'response',
      getErrorHtml(`Команда не найдена: ${cmdName}. Введите "help" для справки.`)
    );
  }
};
