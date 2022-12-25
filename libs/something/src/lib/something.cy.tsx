import * as React from 'react'
import Something, { SomethingProps } from './something'


describe(Something.name, () => {
  let props: SomethingProps;

  beforeEach(() => {
    props = {
    }
  })

  it('renders', () => {
    cy.mount(<Something {...props}/>)
  })
})

