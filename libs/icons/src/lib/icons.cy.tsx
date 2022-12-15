import * as React from 'react'
import Icons, { IconsProps } from './icons'


describe(Icons.name, () => {
  let props: IconsProps;

  beforeEach(() => {
    props = {
    }
  })

  it('renders', () => {
    cy.mount(<Icons {...props}/>)
  })
})

