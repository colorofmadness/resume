export type TColor =
  | 'primary'
  | 'primary-5'
  | 'primary-10'
  | 'primary-15'
  | 'primary-20'
  | 'primary-25'
  | 'primary-30'
  | 'primary-35'
  | 'primary-40'
  | 'primary-45'
  | 'primary-50'
  | 'primary-55'
  | 'primary-60'
  | 'primary-65'
  | 'primary-70'
  | 'primary-75'
  | 'primary-80'
  | 'primary-85'
  | 'primary-90'
  | 'primary-95';

export interface ICardProps {
  color?: TColor;
}

export const defaultProps = {
  color: 'primary' as TColor
};
