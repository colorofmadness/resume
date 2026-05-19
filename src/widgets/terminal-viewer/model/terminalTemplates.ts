import type { IProject } from '@entities/project/model/types';

import escapeHtml from '@shared/lib/utils/string';

export const getCommandsTableHtml = (): string => `
  <table style="text-align: left; border-collapse: collapse; margin: 16px 0; width: 100%; max-width: 450px;">
    <tbody>
      <tr>
        <td class="accent-text">ls</td>
        <td>посмотреть список проектов</td>
      </tr>
      <tr>
        <td class="accent-text">cat [id]</td>
        <td>подробнее о проекте</td>
      </tr>
      <tr>
        <td class="accent-text">run [id]</td>
        <td>запустить проект</td>
      </tr>
      <tr>
        <td class="accent-text">clear</td>
        <td>очистить терминал</td>
      </tr> 
      <tr>
        <td class="accent-text">logout</td>
        <td>выйти из системы</td>
      </tr>
      <tr>
        <td class="accent-text">resume</td>
        <td>открыть резюме</td>
      </tr>
      <tr>
        <td class="accent-text">contacts</td>
        <td>контактная информация</td>
      </tr>
      <tr>
        <td class="accent-text">help</td>
        <td>показать справку</td>
      </tr>
    </tbody>
  </table>
`;

export const getWelcomeHtml = (username: string): string => `
  <div>
    Добро пожаловать, <b class="success-text">${escapeHtml(username)}</b>, в терминал портфолио!<br/><br/>
    Доступные команды:
    ${getCommandsTableHtml()}
    Введите команду и нажмите Enter...
  </div>
`;

export const getHelpHtml = (): string => `
  <div>
    Доступные команды:
    ${getCommandsTableHtml()}
  </div>
`;

export const getAuthPromptHtml = (): string =>
  'Инициализация терминала...<br/>Пожалуйста, введите ваше имя для продолжения:';

export const getProjectDetailsHtml = (project: IProject): string => `
  <span class="accent-text">Проект:</span> <b>${escapeHtml(project.name)}</b><br/>
  <span class="accent-text">Стек:</span> ${escapeHtml(project.stack || 'Не указан')}<br/>
  <span class="accent-text">Описание:</span> ${escapeHtml(project.description)}<br/>
  <br/>
  <i>Введите <span class="accent-text">run ${escapeHtml(project.id)}</span> для запуска.</i>
`;

export const getProjectListHtml = (projects: IProject[]): string => {
  const list = projects
    .map(
      (p, index) =>
        `${index}. <b class="accent-text">${escapeHtml(p.id)}</b> - ${escapeHtml(p.name)}`
    )
    .join('<br/>');
  return `Список проектов:<br/>${list}`;
};

export const getErrorHtml = (message: string): string =>
  `<span class="danger-text">Ошибка: ${escapeHtml(message)}</span>`;

export const getInfoHtml = (message: string): string =>
  `<span class="gray-text">${escapeHtml(message)}</span>`;

export const getSuccessHtml = (message: string, url?: string): string => {
  const link = url ? ` <a href="${url}" target="_blank">Открыть</a>` : '';
  return `<span class="success-text">${escapeHtml(message)}</span>${link}`;
};

export const getContactsHtml = (): string => `
  <span>GitHub:</span> 
  <a href="https://github.com/colorofmadness" target="_blank">github.com/colorofmadness</a><br/>
  <span>Telegram:</span> 
  <a href="https://t.me/colorofmadness" target="_blank">@colorofmadness</a>
`;
