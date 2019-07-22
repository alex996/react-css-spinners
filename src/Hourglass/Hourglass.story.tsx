import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Hourglass } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1
}

storiesOf('Hourglass', module)
  .add('default', (): JSX.Element => <Hourglass />)
  .add(
    'custom',
    (): JSX.Element => (
      <Hourglass
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
      />
    )
  )
