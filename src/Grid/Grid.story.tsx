import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Grid } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1
}

storiesOf('Grid', module)
  .add('default', (): JSX.Element => <Grid />)
  .add(
    'custom',
    (): JSX.Element => (
      <Grid
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
      />
    )
  )
