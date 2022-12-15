import Components from './components';

it('Components', () => {
  cy.mount(<Components />);
  cy.get('button').should('contains.text', 'Click me!');
});
