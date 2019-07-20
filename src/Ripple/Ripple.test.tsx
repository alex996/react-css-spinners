import React from 'react'
import renderer from 'react-test-renderer'
import { Ripple } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Ripple />).toJSON()
  expect(tree).toMatchSnapshot()
})
