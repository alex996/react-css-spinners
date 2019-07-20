import React from 'react'
import renderer from 'react-test-renderer'
import { Hourglass } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Hourglass />).toJSON()
  expect(tree).toMatchSnapshot()
})
