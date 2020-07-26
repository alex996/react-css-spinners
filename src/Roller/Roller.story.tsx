import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Roller } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1,
}

export default {
  component: Roller,
  title: 'Roller',
}

export const basic: FC = () => <Roller />

export const custom: FC = () => (
  <Roller
    size={number('Size', 100, sizeOptions)}
    color={color('Color', '#d36ac2')}
  />
)
