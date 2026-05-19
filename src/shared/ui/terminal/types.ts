export type TCommand = {
  text?: string;
  response?: string;
};

export type TTypeBusListener = 'response' | 'command' | 'clear';

export interface ITerminalProps {
  welcomeMessage: string;
  prompt: string;
}
