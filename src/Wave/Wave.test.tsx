import React from 'react'
import renderer from 'react-test-renderer'
import { Wave } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Wave />).toJSON()
  expect(tree).toMatchSnapshot()
})
