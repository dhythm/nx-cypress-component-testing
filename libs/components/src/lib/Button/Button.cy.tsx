import { Button } from "./Button"

it('Button', () => {
  cy.mount(<Button />);
  cy.get('div').contains('');
})
