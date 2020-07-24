import React from 'react'
import renderer from 'react-test-renderer'
import { Ring } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Ring />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Ring className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-ring spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Ring size={100} color='#d36ac2' thickness={7} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-ring-size': '100px',
    '--rcs-ring-color': '#d36ac2',
    '--rcs-ring-thickness': '7px',
    margin: 20,
  })
})
