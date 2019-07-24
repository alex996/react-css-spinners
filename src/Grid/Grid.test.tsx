import React from 'react'
import renderer from 'react-test-renderer'
import { Grid } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Grid />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Grid className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-grid spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Grid size={100} color='#d36ac2' style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-grid-size': '100px',
    '--rcs-grid-color': '#d36ac2',
    margin: 20
  })
})
