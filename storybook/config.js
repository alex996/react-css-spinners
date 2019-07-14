import { configure, addParameters } from '@storybook/react'

function loadStories () {
  require('../stories/index.js')
}

addParameters({
  options: {
    brandUrl: 'https://alex996.github.io/react-css-spinners/',
    showPanel: false
  }
})

configure(loadStories, module)
