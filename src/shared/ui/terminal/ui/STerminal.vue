<template>
  <div :class="$style.terminal" @click="onClick">
    <div
      v-if="welcomeMessage"
      :class="$style['terminal__command-response']"
      v-html="welcomeMessage"
    />

    <div v-if="commands.length" :class="$style['terminal__commands']">
      <div v-for="command of commands" :key="command.id" :class="$style['terminal__command-item']">
        <div v-if="command.text" :class="$style['terminal__prompt']">
          <span :class="$style['terminal__prompt-label']">{{ prompt }}</span>
          <span :class="$style['terminal__prompt-command']">{{ command.text }}</span>
        </div>
        <div v-html="command.response" />
      </div>
    </div>

    <div v-if="!isLoading" :class="$style['terminal__prompt']">
      <span :class="$style['terminal__prompt-label']">{{ prompt }}</span>
      <input
        ref="inputRef"
        v-model="commandText"
        :class="$style['terminal__prompt-input']"
        autocomplete="off"
        type="text"
        @keydown="onKeydown"
      />
    </div>

    <div ref="spacerRef" :class="$style['terminal__spacer']" />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue';

import TerminalService from '../terminalService';
import type { ITerminalProps, TCommand, TTypeBusListener } from '../types';

defineProps<ITerminalProps>();

const commandText = ref<string>('');
const commands = ref<(TCommand & { id: string })[]>([]);

const inputRef = useTemplateRef<HTMLInputElement>('inputRef');
const spacerRef = useTemplateRef<HTMLDivElement>('spacerRef');

const scrollToBottom = () => {
  spacerRef.value?.scrollIntoView({ behavior: 'auto', block: 'end' });
};

watch(
  commands,
  () => {
    nextTick(scrollToBottom);
  },
  { deep: true }
);

const busListener = (event: TTypeBusListener, payload: unknown) => {
  if (typeof payload !== 'string') return;

  const lastCommand = commands.value.at(-1);

  switch (event) {
    case 'response':
      if (!lastCommand) {
        commands.value.push({ id: crypto.randomUUID(), text: '', response: payload });
      } else {
        lastCommand.response = lastCommand.response
          ? `${lastCommand.response}<br>${payload}`
          : payload;
      }
      break;

    case 'update-response':
      if (lastCommand && lastCommand.response) {
        const lastBreakIndex = lastCommand.response.lastIndexOf('<br>');
        if (lastBreakIndex === -1) {
          lastCommand.response = payload;
        } else {
          lastCommand.response = lastCommand.response.substring(0, lastBreakIndex + 4) + payload;
        }
      }
      break;

    case 'clear':
      commands.value = [];
      break;

    case 'set-command':
      commandText.value = payload;
      nextTick(() => inputRef.value?.focus());
      break;

    default:
      break;
  }
};

onMounted(() => {
  TerminalService.on(busListener);
  inputRef.value?.focus();
});

onBeforeUnmount(() => {
  TerminalService.off(busListener);
});

const onClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('terminal-command')) {
    const { command } = target.dataset;
    if (command) {
      TerminalService.emit('set-command', command);
      return;
    }
  }
  inputRef.value?.focus();
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    const trimmed = commandText.value.trim();
    if (!trimmed) return;

    commands.value.push({
      id: crypto.randomUUID(),
      text: trimmed,
      response: ''
    });

    TerminalService.emit('command', trimmed);
    commandText.value = '';
  }
};
</script>

<style lang="postcss" module src="../styles.module.pcss" />
