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
      <tr><td>${createTerminalCmd('ls')}</td><td>посмотреть список файлов</td></tr>
      <tr><td>${createTerminalCmd('cat')}</td><td>просмотреть проект или файл</td></tr>
      <tr><td>${createTerminalCmd('run')}</td><td>запустить проект</td></tr>
      <tr><td>${createTerminalCmd('clear')}</td><td>очистить терминал</td></tr> 
      <tr><td>${createTerminalCmd('logout')}</td><td>выйти из системы</td></tr>
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

export const getImageHtml = (url: string): string => {
  return `<img src="${escapeHtml(url)}" style="max-width: 390px; height: auto; margin-top: 10px;" />`;
};

export const getProjectListHtml = (projects: IProject[]): string => {
  const projectItems = projects.map((p) => {
    const projectCmd = createTerminalCmd(`cat ${p.id}`, p.id);
    return `dr-xr-xr-x 1 user user 4096 Jul 15 10:17 ${projectCmd}`;
  });

  const fileItems = [
    `-rw-r--r-- 1 user user    42 May 01 12:30 notes.txt`,
    `-r--r--r-- 1 user user  232K Jan 12 11:28 ${createTerminalCmd('cat loki.jpg', 'loki.jpg')}`,
    `-r--r--r-- 1 user user  232K Feb 03 16:45 ${createTerminalCmd('cat astrid.jpg', 'astrid.jpg')}`,
    `-rw-r--r-- 1 user user   13K Jun 22 18:05 ${createTerminalCmd('cat resume.pdf', 'resume.pdf')}`,
    `-rw-r--r-- 1 user user   13K Jun 22 18:05 secret_passwords_do_not_open.txt`,
    `-r--r--r-- 1 user user  312K Apr 20 09:11 ${createTerminalCmd('cat loki&astrid.jpg', 'loki&astrid.jpg')}`,
    `-rwxr-xr-x 1 user user  1.2M Jul 04 22:10 the_matrix.exe`,
    `-rw-r--r-- 1 user user     0 Jul 15 10:21 .env`,
    `-rw-r--r-- 1 user user     0 Jul 15 10:21 ${createTerminalCmd('cat contacts.vcf', 'contacts.vcf')}`
  ];

  const allItems = [...projectItems, ...fileItems].sort(() => Math.random() - 0.5);

  return allItems.join('<br/>');
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

export const getResumeHtml = (): string => {
  const resumeUrl = 'https://hh.ru/resume/e5395570ff108bad680039ed1f6a5056426f4d';
  return `
    <div class="terminal-resume">
      <span>ФИО: </span>Ярославцев Владимир Игоревич<br/>
      <span>Должность: </span>Frontend-разработчик<br/>
      <br/>
      <span>Ссылка на полное резюме:</span> 
      <a class="terminal-link" href="${escapeHtml(resumeUrl)}" target="_blank">${escapeHtml(resumeUrl)}</a>
    </div>
  `;
};
