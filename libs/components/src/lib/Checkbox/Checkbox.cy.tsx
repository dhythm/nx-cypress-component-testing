import { Checkbox } from './Checkbox';

it('Checkbox', () => {
  cy.mount(<Checkbox label="confirm" checked />);
  cy.get('div').contains('');
});
