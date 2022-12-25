import { Checkbox } from './Checkbox';

it('Checkbox', () => {
  cy.mount(<Checkbox label="confirm" isChecked={true} />);
  cy.get('div').contains('confirm');
  cy.matchImageSnapshot();
});
