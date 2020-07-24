import React from 'react'
import renderer from 'react-test-renderer'
import { Wave } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Wave />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Wave className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-wave spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Wave size={100} color='#d36ac2' thickness={15} style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-wave-size': '100px',
    '--rcs-wave-color': '#d36ac2',
    '--rcs-wave-thickness': '15px',
    margin: 20,
  })
})
