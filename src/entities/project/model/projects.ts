import type { IProject } from './types';

const PROJECTS_LIST: IProject[] = [
  {
    id: 'memoryGame',
    name: 'Игра на память',
    description: 'Классическая игра на совпадения, тренирующая зрительную память.',
    stack: 'Vue 3, Pinia, TypeScript',
    url: 'https://colorofmadness-memorygame.netlify.app/'
  },
  {
    id: 'realTimeChat',
    name: 'Real-time Чат',
    description: 'Мгновенный обмен сообщениями с поддержкой комнат.',
    stack: 'Vue 3, WebSocket, Firebase',
    url: 'https://colorofmadnessrealtimechat.netlify.app/'
  }
];

export default PROJECTS_LIST;
