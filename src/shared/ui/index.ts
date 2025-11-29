import type { IButtonProps } from './button';
import SButton from './button';
import type { IIconProps } from './icon';
import SIcon from './icon';
import type { ICardProps, TColor } from './card';
import SCard from './card';
import type { IImageProps } from './image';
import SImage from './image';
import type { ITitleProps, THeader } from './title';
import STitle from './title';
import type { IScreenProps, IScreenSlots } from './screen';
import SScreen from './screen';
import SSpotlight from './spotlight';
import type { ITerminalProps, TCommand, TTypeBusListener } from './terminal';
import STerminal from './terminal';

export { SButton, SIcon, SCard, SImage, STitle, SScreen, SSpotlight, STerminal };
export type {
  IScreenProps,
  IScreenSlots,
  ITitleProps,
  THeader,
  IImageProps,
  TColor,
  ICardProps,
  IIconProps,
  IButtonProps,
  ITerminalProps,
  TTypeBusListener,
  TCommand
};
