import { configure, addParameters } from '@storybook/react'
import packageJson from '../package.json'

function loadStories () {
  require('../stories/index.js')
}

addParameters({
  options: {
    brandUrl: packageJson.repository.url,
    showPanel: false
  }
})

configure(loadStories, module)
