import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { Ellipsis } from './'

const sizeOptions = {
  range: true,
  min: 20,
  max: 200,
  step: 1
}

storiesOf('Ellipsis', module)
  .add('default', (): JSX.Element => <Ellipsis />)
  .add(
    'custom',
    (): JSX.Element => (
      <Ellipsis
        size={number('Size', 100, sizeOptions)}
        color={color('Color', '#d36ac2')}
      />
    )
  )
