import { Hello } from './Hello';

it('Hello', () => {
  cy.mount(<Hello />);
  cy.get('div').contains('Hello, World!');
});
