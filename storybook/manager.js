import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

const theme = create({
  brandUrl: 'https://alex996.github.io/react-css-spinners/',
})

addons.setConfig({
  theme,
})
