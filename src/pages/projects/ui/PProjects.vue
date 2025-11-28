<template>
  <WInnerLayout>
    <STerminal
      :class="$style['project-terminal']"
      :welcome-message="welcomeText"
      prompt="visitor@portfolio:~$"
    />
  </WInnerLayout>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue';

import WInnerLayout from '@widgets/layout/inner-layout';

import type { TTypeBusListener } from '@shared/ui';
import { STerminal } from '@shared/ui';
import TerminalService from '@shared/ui/terminal/terminalService';

const welcomeText = `
Добро пожаловать в мое портфолио!<br/><br/>

Доступные команды:<br/>
• projects - посмотреть мои проекты<br/>
• help     - показать все команды<br/><br/>

Введите команду и нажмите Enter...
`;

const showProjects = () => {};
const showProject = (projectName: string, projectUrl: string) => {};

const commandHandler = (event: TTypeBusListener, payload: string) => {
  if (event === 'command') {
    let response;
    const [command, arg] = payload.split(' ');

    switch (command) {
      case 'projects':
        showProjects();
        break;

      case 'project':
        if (arg === 'memory') {
          showProject('Игра на память', 'блаблабал');
        }
        if (arg === 'chat') {
          showProject('Чат', 'блаблабал');
        }
        break;

      default:
        response = `Unknown command: ${command}`;
    }

    TerminalService.emit('response', response);
  }
};

onMounted(() => {
  TerminalService.on(commandHandler);
});

onBeforeUnmount(() => {
  TerminalService.off(commandHandler);
});
</script>

<style lang="postcss" module src="../style.module.pcss" />
