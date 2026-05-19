<template>
  <div :class="$style.terminal" @click="onClick">
    <div
      v-if="welcomeMessage"
      :class="$style['terminal__command-response']"
      v-html="welcomeMessage"
    />

    <div v-if="commands.length" :class="$style['terminal__commands']">
      <div
        v-for="(command, i) of commands"
        :key="command.text + i.toString()"
        :class="$style['terminal__command-item']"
      >
        <div :class="$style['terminal__prompt']">
          <span :class="$style['terminal__prompt-label']">{{ prompt }}</span>
          <span :class="$style['terminal__prompt-command']">{{ command.text }}</span>
        </div>
        <div v-html="command.response" />
      </div>
    </div>

    <div :class="$style['terminal__prompt']">
      <span :class="$style['terminal__prompt-label']">{{ prompt }}</span>
      <input
        ref="input"
        v-model="commandText"
        :class="$style['terminal__prompt-input']"
        autocomplete="off"
        type="text"
        @keydown="onKeydown"
      />
    </div>

    <div ref="spacer" :class="$style['terminal__spacer']" />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue';

import TerminalService from '../terminalService';
import type { ITerminalProps, TCommand, TTypeBusListener } from '../types';

defineProps<ITerminalProps>();

const commandText = ref<string>('');
const commands = ref<TCommand[]>([]);
const inputRef = useTemplateRef<HTMLInputElement>('input');
const spacerRef = useTemplateRef<HTMLDivElement>('spacer');

const scrollToBottom = () => spacerRef.value?.scrollIntoView({ behavior: 'auto', block: 'end' });

watch(
  commands,
  () => {
    nextTick(scrollToBottom);
  },
  { deep: true }
);

const responseListener = (event: TTypeBusListener, payload: unknown) => {
  if (event === 'response' && commands.value.length > 0 && !!payload) {
    const lastCommand = commands.value[commands.value.length - 1];
    if (lastCommand && typeof payload === 'string') {
      lastCommand.response = lastCommand.response
        ? `${lastCommand.response}<br>${payload}`
        : payload;
    }
  }
  if (event === 'clear') {
    commands.value = [];
  }
};

onMounted(() => {
  TerminalService.on(responseListener);
});

onBeforeUnmount(() => {
  TerminalService.off(responseListener);
});

const onClick = () => {
  inputRef.value?.focus();
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && commandText.value) {
    commands.value.push({ text: commandText.value });
    TerminalService.emit('command', commandText.value);
    commandText.value = '';
  }
};
</script>

<style lang="postcss" module src="../styles.module.pcss" />
