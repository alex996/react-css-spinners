import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Roller } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1
}

storiesOf('Roller', module)
  .add('default', (): JSX.Element => <Roller />)
  .add(
    'custom',
    (): JSX.Element => (
      <Roller
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
      />
    )
  )
