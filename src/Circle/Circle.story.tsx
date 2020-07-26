import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Circle } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1,
}

export default {
  component: Circle,
  title: 'Circle',
}

export const basic: FC = () => <Circle />

export const custom: FC = () => (
  <Circle
    size={number('Size', 100, sizeOptions)}
    color={color('Color', '#d36ac2')}
  />
)
