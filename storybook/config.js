import { configure, addParameters } from '@storybook/react'
import packageJson from '../package.json'

function loadStories () {
  require('../stories/index.js')
}

addParameters({
  options: {
    brandTitle: 'React CSS Spinners',
    brandUrl: packageJson.repository.url,
    showPanel: false
  }
})

configure(loadStories, module)
