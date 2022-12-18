import React from 'react';
import { Button as MuiButton } from '@mui/material';
export type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  return <MuiButton>{text}</MuiButton>;
};
