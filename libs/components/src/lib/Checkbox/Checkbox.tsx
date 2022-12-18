import React from 'react';
import { ChakraProvider, Checkbox as CuiCheckbox } from '@chakra-ui/react';
export type Props = { label: string; isChecked: boolean };

export const Checkbox: React.FC<Props> = ({ label, isChecked }) => {
  return (
    <ChakraProvider>
      <CuiCheckbox isChecked={isChecked}>{label}</CuiCheckbox>
    </ChakraProvider>
  );
};
