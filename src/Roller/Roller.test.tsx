import React from 'react'
import renderer from 'react-test-renderer'
import { Roller } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Roller />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Roller className='spinner' />)

  expect(root.findByType('div').props.className).toEqual('rcs-roller spinner')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Roller size={100} color='#d36ac2' style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-roller-size': '100px',
    '--rcs-roller-color': '#d36ac2',
    margin: 20
  })
})
