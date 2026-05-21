import type { IProject } from '@entities/project/model/types';

import escapeHtml from '@shared/lib/utils/string';

const createTerminalCmd = (cmd: string, display?: string): string => {
  const escapedCmd = escapeHtml(cmd);
  const escapedDisplay = display ? escapeHtml(display) : escapedCmd;
  return `<i><span class="accent-text terminal-command" data-command="${escapedCmd}">${escapedDisplay}</span></i>`;
};

export const getCommandsTableHtml = (): string => `
  <table class="terminal-commands-table">
    <tbody>
      <tr><td>${createTerminalCmd('ls')}</td><td>посмотреть список проектов</td></tr>
      <tr><td>${createTerminalCmd('cat')}</td><td>подробнее о проекте</td></tr>
      <tr><td>${createTerminalCmd('run')}</td><td>запустить проект</td></tr>
      <tr><td>${createTerminalCmd('clear')}</td><td>очистить терминал</td></tr> 
      <tr><td>${createTerminalCmd('logout')}</td><td>выйти из системы</td></tr>
      <tr><td>${createTerminalCmd('resume')}</td><td>открыть резюме</td></tr>
      <tr><td>${createTerminalCmd('contacts')}</td><td>контактная информация</td></tr>
      <tr><td>${createTerminalCmd('help')}</td><td>показать справку</td></tr>
    </tbody>
  </table>
`;

export const getWelcomeHtml = (username: string): string => `
  <div>
    Добро пожаловать, <b class="success-text">${escapeHtml(username)}</b>, в терминал портфолио!<br/>
    ${getCommandsTableHtml()}
    Введите команду и нажмите Enter...
  </div>
`;

export const getHelpHtml = (): string => `
  <div>
    ${getCommandsTableHtml()}
  </div>
`;

export const getAuthPromptHtml = (): string =>
  'Инициализация терминала...<br/>Пожалуйста, введите ваше имя для продолжения:';

export const getProjectDetailsHtml = (project: IProject): string => {
  const runCmd = createTerminalCmd(`run ${project.id}`, `run ${project.id}`);

  return `
    <span class="accent-text">Проект:</span> <b>${escapeHtml(project.name)}</b><br/>
    <span class="accent-text">Стек:</span> ${escapeHtml(project.stack || 'Не указан')}<br/>
    <span class="accent-text">Описание:</span> ${escapeHtml(project.description)}<br/>
    <br/>
    Введите ${runCmd} для запуска.
  `;
};

export const getProjectListHtml = (projects: IProject[]): string => {
  if (projects.length === 0) return 'Список проектов пуст.';

  const list = projects
    .map((p, index) => {
      const projectCmd = createTerminalCmd(`cat ${p.id}`, p.id);
      return `${index}. ${projectCmd} - ${escapeHtml(p.name)}`;
    })
    .join('<br/>');

  const exampleCmd = createTerminalCmd(`cat ${projects[0].id}`);

  return `
    Список проектов:<br/>
    ${list}<br/>
    <br/>
    Введите, например, ${exampleCmd} для подробной информации.
  `;
};

export const getErrorHtml = (message: string): string =>
  `<span class="danger-text">Ошибка: ${escapeHtml(message)}</span>`;

export const getInfoHtml = (message: string): string =>
  `<span class="gray-text">${escapeHtml(message)}</span>`;

export const getSuccessHtml = (message: string, url?: string): string => {
  const link = url
    ? ` <a class="terminal-link" href="${escapeHtml(url)}" target="_blank">[Открыть]</a>`
    : '';
  return `<span class="success-text">${escapeHtml(message)}</span>${link}`;
};

export const getContactsHtml = (): string => `
  <span>GitHub:</span> 
  <a class="terminal-link" href="https://github.com/colorofmadness" target="_blank">github.com/colorofmadness</a><br/>
  <span>Telegram:</span> 
  <a class="terminal-link" href="https://t.me/colorofmadness" target="_blank">@colorofmadness</a>
`;
