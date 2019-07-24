import React from 'react'
import renderer from 'react-test-renderer'
import { Hourglass } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Hourglass />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Hourglass className='spinner' />)

  expect(root.findByType('div').props.className).toEqual(
    'rcs-hourglass spinner'
  )
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Hourglass size={100} color='#d36ac2' style={{ margin: 20 }} />
  )
  const { style } = root.findByType('div').props

  expect(style).toEqual({
    '--rcs-hourglass-size': '100px',
    '--rcs-hourglass-color': '#d36ac2',
    margin: 20
  })
})
