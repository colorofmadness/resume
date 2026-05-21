export type TCommand = {
  text?: string;
  response?: string;
};

export type TTypeBusListener = 'response' | 'command' | 'clear' | 'set-command' | 'update-response';

export interface ITerminalProps {
  welcomeMessage: string;
  prompt: string;
  isLoading?: boolean;
}
