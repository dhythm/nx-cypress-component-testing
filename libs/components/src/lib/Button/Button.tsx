import React from 'react';
import { Button as CuiButton } from '@chakra-ui/react';
export type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  return <CuiButton colorScheme={'blue'}>{text}</CuiButton>;
};
