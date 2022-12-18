import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
export type Props = { label: string; checked: boolean };

export const Checkbox: React.FC<Props> = ({ label, checked }) => {
  return (
    <FormControlLabel
      label={label}
      control={<MuiCheckbox checked={checked} />}
    />
  );
};
