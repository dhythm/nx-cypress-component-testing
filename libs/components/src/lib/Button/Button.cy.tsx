import { Button } from './Button';
import { ChakraProvider } from '@chakra-ui/react';

it('Button', () => {
  cy.mount(
    <ChakraProvider>
      <Button text="click me" />
    </ChakraProvider>
  );
  cy.get('div').contains('click me');
});
