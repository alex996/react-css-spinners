import React from 'react'
import renderer from 'react-test-renderer'
import { DualRing } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<DualRing />).toJSON()
  expect(tree).toMatchSnapshot()
})
