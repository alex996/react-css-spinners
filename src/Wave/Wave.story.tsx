import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Wave } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1
}

const thicknessOptions = {
  range: true,
  min: 1,
  max: 25,
  step: 1
}

storiesOf('Wave', module)
  .add('default', (): JSX.Element => <Wave />)
  .add(
    'custom',
    (): JSX.Element => (
      <Wave
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
        thickness={number('Thickness', 15, thicknessOptions)}
      />
    )
  )
