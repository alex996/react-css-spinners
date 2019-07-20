import React from 'react'
import renderer from 'react-test-renderer'
import { Grid } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Grid />).toJSON()
  expect(tree).toMatchSnapshot()
})
