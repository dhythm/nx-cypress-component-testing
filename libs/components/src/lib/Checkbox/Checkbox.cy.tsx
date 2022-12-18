import { Checkbox } from './Checkbox';

it('Checkbox', () => {
  cy.mount(<Checkbox label="confirm" isChecked />);
  cy.get('div').contains('');
});
