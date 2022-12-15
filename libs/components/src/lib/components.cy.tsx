import Components from './components';

it('Components', () => {
  cy.mount(<Components />);
  cy.get('h1').contains('Welcome to Components!');
});
