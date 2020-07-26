import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { DualRing } from './'

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

export default {
  component: DualRing,
  title: 'DualRing',
}

export const basic: FC = () => <DualRing />

export const custom: FC = () => (
  <DualRing
    size={number('Size', 100, sizeOptions)}
    color={color('Color', '#d36ac2')}
    thickness={number('Thickness', 7, thicknessOptions)}
  />
)
