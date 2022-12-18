import { Checkbox } from './Checkbox';
import { ChakraProvider } from '@chakra-ui/react';

it('Checkbox', () => {
  cy.mount(
    <ChakraProvider>
      <Checkbox isChecked label="confirm" />
    </ChakraProvider>
  );
  cy.get('div').contains('');
});
