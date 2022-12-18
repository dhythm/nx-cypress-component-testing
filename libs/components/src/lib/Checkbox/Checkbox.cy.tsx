import { Checkbox } from "./Checkbox"

it('Checkbox', () => {
  cy.mount(<Checkbox />);
  cy.get('div').contains('');
})
