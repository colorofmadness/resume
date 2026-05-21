import { computed, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

import PROJECTS_LIST from '@entities/project/model/projects';

import { TerminalService, type TTypeBusListener } from '@shared/ui/terminal';
import lokiImg from '@shared/assets/images/loki.jpg';
import astridImg from '@shared/assets/images/astrid.jpg';
import lokiAndAstridImg from '@shared/assets/images/loki&astrid.jpg';

import {
  getContactsHtml,
  getErrorHtml,
  getHelpHtml,
  getImageHtml,
  getInfoHtml,
  getProjectDetailsHtml,
  getProjectListHtml,
  getResumeHtml,
  getSuccessHtml
} from './terminalTemplates';

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const runLoadingStep = (text: string, stepDurationMs = 150): Promise<boolean> =>
  new Promise((resolve) => {
    let percent = 0;

    TerminalService.emit('response', getInfoHtml(`${text} [${percent}%]`));

    const interval = setInterval(() => {
      percent += 10;

      if (percent < 100) {
        TerminalService.emit('update-response', getInfoHtml(`${text} [${percent}%]`));
      } else {
        clearInterval(interval);
        TerminalService.emit('update-response', `${getInfoHtml(text)} ${getSuccessHtml('[OK]')}`);
        resolve(true);
      }
    }, stepDurationMs);
  });

const useCommands = () => {
  const STORAGE_KEY = 'terminal-user';

  const username = useLocalStorage<string>(STORAGE_KEY, '');
  const isLogged = computed(() => !!username.value);

  const isLoading = ref(false);

  const runStepsQueue = (steps: string[]): Promise<unknown> => {
    return steps.reduce<Promise<unknown>>(
      (chain, step) => chain.then(() => runLoadingStep(step)),
      Promise.resolve()
    );
  };

  const login = (name: string) => {
    isLoading.value = true;
    const steps = [
      'Установка безопасного соединения...',
      'Проверка учетных данных...',
      'Загрузка профиля пользователя...',
      'Инициализация модулей терминала...',
      'Запуск среды портфолио...'
    ];

    runStepsQueue(steps)
      .then(() => {
        TerminalService.emit('response', getSuccessHtml('Авторизация успешна.'));
        return delay(1000);
      })
      .then(() => {
        username.value = name;
        TerminalService.emit('clear', '');
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const logout = () => {
    username.value = '';
    TerminalService.emit('clear', '');
  };

  const runProject = (id?: string) => {
    const projectId = id?.trim();
    if (!projectId) {
      TerminalService.emit('response', getErrorHtml('Укажите ID проекта (например, "run memory")'));
      return;
    }

    const project = PROJECTS_LIST.find((p) => p.id === projectId);
    if (!project) {
      TerminalService.emit('response', getErrorHtml(`Проект "${projectId}" не найден.`));
      return;
    }

    isLoading.value = true;
    TerminalService.emit('response', getInfoHtml(`Запуск проекта "${project.name}"`));

    const steps = ['Установка зависимостей...', 'Запуск дев среды...'];

    runStepsQueue(steps)
      .then(() => {
        TerminalService.emit('response', getSuccessHtml('Приложение готово!', project.url));
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const cat = (argument?: string): string | void => {
    const arg = argument?.trim();
    if (!arg) {
      return getErrorHtml(
        'Укажите ID проекта или имя файла (например, "cat memory" или "cat loki.jpg")'
      );
    }

    const images: Record<string, string> = {
      'loki.jpg': lokiImg,
      'astrid.jpg': astridImg,
      'loki&astrid.jpg': lokiAndAstridImg
    };

    if (images[arg]) {
      return getImageHtml(images[arg]);
    }

    if (arg === 'resume.pdf') {
      return getResumeHtml();
    }

    if (arg === 'contacts.vcf') {
      return getContactsHtml();
    }

    const project = PROJECTS_LIST.find((p) => p.id === arg);
    if (project) {
      return getProjectDetailsHtml(project);
    }

    return getErrorHtml(`Проект или файл "${arg}" не найден. Введите "ls" для списка.`);
  };

  const COMMANDS: Record<string, (arg?: string) => string | void> = {
    help: () => getHelpHtml(),
    ls: () => getProjectListHtml(PROJECTS_LIST),
    cat,
    run: runProject,
    clear: () => TerminalService.emit('clear', ''),
    logout
  };

  const commandHandler = (event: TTypeBusListener, payload: string) => {
    if (event !== 'command') return;

    if (isLoading.value) return;

    const trimmedPayload = payload.trim();
    if (!trimmedPayload) return;

    if (!isLogged.value) {
      login(trimmedPayload);
      return;
    }

    const [cmdName, ...args] = trimmedPayload.split(/\s+/);
    const arg = args.join(' ');
    const action = COMMANDS[cmdName?.toLowerCase()];

    if (action) {
      const response = action(arg);
      if (response) {
        TerminalService.emit('response', response);
      }
    } else {
      TerminalService.emit(
        'response',
        getErrorHtml(`Команда не найдена: ${cmdName}. Введите "help" для справки.`)
      );
    }
  };

  return {
    commandHandler,
    username,
    isLogged,
    isLoading
  };
};

export default useCommands;
