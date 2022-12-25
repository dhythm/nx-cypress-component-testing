import { Button } from './Button';

it('Button', () => {
  cy.mount(<Button text="click me" />);
  cy.get('div').contains('click me');
  cy.matchImageSnapshot();
});
