import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Hourglass } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1,
}

export default {
  component: Hourglass,
  title: 'Hourglass',
}

export const basic: FC = () => <Hourglass />

export const custom: FC = () => (
  <Hourglass
    size={number('Size', 100, sizeOptions)}
    color={color('Color', '#d36ac2')}
  />
)
