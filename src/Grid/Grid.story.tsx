import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Grid } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1,
}

export default {
  component: Grid,
  title: 'Grid',
}

export const basic: FC = () => <Grid />

export const custom: FC = () => (
  <Grid
    size={number('Size', 100, sizeOptions)}
    color={color('Color', '#d36ac2')}
  />
)
