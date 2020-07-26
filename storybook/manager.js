import { create } from '@storybook/theming'
import { addons } from '@storybook/addons'

const theme = create({
  base: 'light',
  brandUrl: 'https://alex996.github.io/react-css-spinners/',
})

addons.setConfig({
  theme,
})
