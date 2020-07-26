import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Ellipsis } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1,
}

export default {
  component: Ellipsis,
  title: 'Ellipsis',
}

export const basic: FC = () => <Ellipsis />

export const custom: FC = () => (
  <Ellipsis
    size={number('Size', 100, sizeOptions)}
    color={color('Color', '#d36ac2')}
  />
)
