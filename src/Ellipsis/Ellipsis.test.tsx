import React from 'react'
import renderer from 'react-test-renderer'
import { Ellipsis } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Ellipsis />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Ellipsis className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-ellipsis spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Ellipsis size={100} color='#d36ac2' style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-ellipsis-size': '100px',
    '--rcs-ellipsis-color': '#d36ac2',
    margin: 20
  })
})
