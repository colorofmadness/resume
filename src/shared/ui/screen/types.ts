export interface IScreenSlots {
  default(): any;

  title(): any;
}

export interface IScreenProps {
  id: string;
  isActive: boolean;
}
