import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Ring } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1,
}

const thicknessOptions = {
  range: true,
  min: 1,
  max: 12,
  step: 1,
}

storiesOf('Ring', module)
  .add('default', (): JSX.Element => <Ring />)
  .add(
    'custom',
    (): JSX.Element => (
      <Ring
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
        thickness={number('Thickness', 7, thicknessOptions)}
      />
    )
  )
