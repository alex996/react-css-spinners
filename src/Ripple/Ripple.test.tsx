import React from 'react'
import renderer from 'react-test-renderer'
import { Ripple } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Ripple />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Ripple className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-ripple spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Ripple size={100} color='#d36ac2' thickness={6} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-ripple-size': '100px',
    '--rcs-ripple-color': '#d36ac2',
    '--rcs-ripple-thickness': '6px',
    margin: 20,
  })
})
