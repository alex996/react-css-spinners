import React from 'react'
import styled from '@emotion/styled'
import {
  addParameters,
  RenderFunction,
  addDecorator,
  configure
} from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addParameters({
  options: {
    brandUrl: 'https://alex996.github.io/react-css-spinners/'
  }
})

const Container = styled('div')`
  background-color: #20232a;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;

  > div {
    margin: 0 1rem;
  }
`

const Decorator = (storyFn: RenderFunction): JSX.Element => (
  <Container>{storyFn()}</Container>
)

addDecorator(Decorator)

addDecorator(withKnobs)

const req = require.context('../src', true, /\.story\.tsx$/)

const loadStories = (): void => {
  req.keys().forEach(req)
}

configure(loadStories, module)
