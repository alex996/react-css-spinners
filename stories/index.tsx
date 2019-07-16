import './style.css'
import React from 'react'
import { storiesOf, addDecorator, RenderFunction } from '@storybook/react'
import { Ellipsis, Ring, Ripple } from '../src'

const Container = (storyFn: RenderFunction): JSX.Element => (
  <div style={{ backgroundColor: '#20232a', padding: '1rem' }}>{storyFn()}</div>
)

addDecorator(Container)

storiesOf('Spinners', module)
  .add('Ellipsis', (): JSX.Element => <Ellipsis />)
  .add('Ring', (): JSX.Element => <Ring />)
  .add('Ripple', (): JSX.Element => <Ripple />)
