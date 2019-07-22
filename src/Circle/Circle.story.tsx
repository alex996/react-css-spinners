import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Circle } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1
}

storiesOf('Circle', module)
  .add('default', (): JSX.Element => <Circle />)
  .add(
    'custom',
    (): JSX.Element => (
      <Circle
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
      />
    )
  )
