<template>
  <STerminal
    :class="$style['project-terminal']"
    :is-loading="isLoading"
    :prompt="prompt"
    :welcome-message="welcomeData"
  />
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted } from 'vue';

import STerminal, { TerminalService } from '@shared/ui/terminal';

import useCommands from '../model/useCommands';
import { getAuthPromptHtml, getWelcomeHtml } from '../model/terminalTemplates';

const { commandHandler, isLogged, username, isLoading } = useCommands();

const welcomeData = computed(() => {
  if (!isLogged.value) return getAuthPromptHtml();
  return getWelcomeHtml(username.value);
});

const prompt = computed(() => {
  if (!isLogged.value) return 'name: ';
  return `${username.value}@portfolio:~$ `;
});

onMounted(() => {
  TerminalService.on(commandHandler);
});

onBeforeUnmount(() => {
  TerminalService.off(commandHandler);
});
</script>

<style module src="../styles.module.pcss" />
