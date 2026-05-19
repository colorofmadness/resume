export type THeader = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TColor = 'accent' | 'text' | 'text-80';

export interface ITitleProps {
  is?: THeader;
  color?: TColor;
}

export const defaultProps: ITitleProps = {
  is: 'h1',
  color: 'accent'
};
