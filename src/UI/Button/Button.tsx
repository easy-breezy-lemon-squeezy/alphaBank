import React from 'react';
import * as UI from './ButtonStyles';

interface IButtonProps {
  value: string;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ value, onClick }) => {
  return <UI.Button onClick={onClick}>{value}</UI.Button>;
};
