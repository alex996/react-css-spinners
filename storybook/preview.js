import React from 'react'
import styled from '@emotion/styled'
import { addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

const Container = styled('div')`
  background-color: #20232a;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;

  > div {
    margin: 0 1rem;
  }
`

const Decorator = (storyFn) => <Container>{storyFn()}</Container>

addDecorator(Decorator)

addDecorator(withKnobs)

addDecorator(withInfo)

addParameters({
  info: { inline: true },
})
