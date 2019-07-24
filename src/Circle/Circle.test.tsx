import React from 'react'
import renderer from 'react-test-renderer'
import { Circle } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Circle />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Circle className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-circle spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Circle size={100} color='#d36ac2' style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-circle-size': '100px',
    '--rcs-circle-color': '#d36ac2',
    margin: 20
  })
})
