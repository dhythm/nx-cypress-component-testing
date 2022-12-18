---
to: <%= abs_path %>/<%= component_name %>.cy.tsx
---
import { <%= component_name %> } from "./<%= component_name %>"

it('<%= component_name %>', () => {
  cy.mount(<<%= component_name %> />);
  cy.get('div').contains('');
})
