import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { Ellipsis, Ring, Ripple } from '../index'

const Container = storyFn => (
  <div style={{ backgroundColor: '#20232a', padding: '1rem' }}>{storyFn()}</div>
)

addDecorator(Container)

storiesOf('Spinners', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />)
