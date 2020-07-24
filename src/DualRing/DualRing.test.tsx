import React from 'react'
import renderer from 'react-test-renderer'
import { DualRing } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<DualRing />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<DualRing className='spinner' />)

  expect(root.findByType('div').props.className).toEqual(
    'rcs-dual-ring spinner'
  )
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <DualRing size={100} color='#d36ac2' thickness={7} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-dual-ring-size': '100px',
    '--rcs-dual-ring-color': '#d36ac2',
    '--rcs-dual-ring-thickness': '7px',
    margin: 20,
  })
})
