export interface IScreenSlots {
  default(): unknown;

  title(): unknown;
}

export interface IScreenProps {
  id: string;
  isActive: boolean;
}
