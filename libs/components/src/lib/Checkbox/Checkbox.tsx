import React from 'react';
import { Checkbox as CuiCheckbox } from '@chakra-ui/react';
export type Props = { label: string; isChecked: boolean };

export const Checkbox: React.FC<Props> = ({ label, isChecked }) => {
  return <CuiCheckbox isChecked={isChecked}>{label}</CuiCheckbox>;
};
