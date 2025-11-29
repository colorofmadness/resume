<template>
  <STerminal
    :class="$style['project-terminal']"
    :welcome-message="WELCOME_TEXT"
    prompt="visitor@portfolio:~$"
  />
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue';

import type { TTypeBusListener } from '@shared/ui/terminal';
import STerminal, { TerminalService } from '@shared/ui/terminal';

interface IProject {
  id: string;
  name: string;
  description: string;
  url?: string;
}

const PROJECTS_LIST: IProject[] = [
  {
    id: 'memory',
    name: 'Игра на память',
    description: 'Классическая игра на Vue 3 + Pinia',
    url: 'https://github.com/.../memory'
  },
  {
    id: 'chat',
    name: 'Чат',
    description: 'Real-time чат на WebSocket',
    url: 'https://github.com/.../chat'
  }
];
// --- Константы ---
const WELCOME_TEXT = `
Добро пожаловать в мое портфолио!<br/><br/>
Доступные команды:<br/>
• projects - посмотреть список проектов<br/>
• project [id] - подробнее о проекте (напр. "project memory")<br/>
• help - справка<br/><br/>
Введите команду и нажмите Enter...
`;

const getProjectsList = () => {
  const list = PROJECTS_LIST.map(p => `• <b>${p.id}</b> - ${p.name}`).join('<br/>');
  return `Список доступных проектов:<br/>${list}`;
};

const getProjectDetails = (id?: string) => {
  if (!id) return 'Error: Please specify a project ID (e.g., "project memory")';

  const project = PROJECTS_LIST.find(p => p.id === id);
  if (!project) return `Error: Project "${id}" not found. Type "projects" to see the list.`;

  return `
    Проект: <b>${project.name}</b><br/>
    Описание: ${project.description}<br/>
    ${project.url ? `Ссылка: <a href="${project.url}" target="_blank">${project.url}</a>` : ''}
  `;
};

const COMMANDS: Record<string, (arg?: string) => string> = {
  help: () => WELCOME_TEXT,
  projects: () => getProjectsList(),
  project: (arg) => getProjectDetails(arg)
};

const commandHandler = (event: TTypeBusListener, payload: string) => {
  if (event !== 'command') return;

  const [cmdName, arg] = payload.trim().split(/\s+/); // Разбиваем по пробелам
  const action = COMMANDS[cmdName.toLowerCase()];

  let response;

  if (action) {
    response = action(arg);
  } else {
    response = `Command not found: ${cmdName}. Type "help" for instructions.`;
  }

  TerminalService.emit('response', response);
};

onMounted(() => {
  TerminalService.on(commandHandler);
});

onBeforeUnmount(() => {
  TerminalService.off(commandHandler);
});
</script>

<style module src="../styles.module.pcss" />