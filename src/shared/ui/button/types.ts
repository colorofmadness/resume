export interface IButtonProps {
  disabled?: boolean;
  loading?: boolean;
  type?: HTMLButtonElement['type'];
}

export const defaultProps: IButtonProps = {
  type: 'button'
};
