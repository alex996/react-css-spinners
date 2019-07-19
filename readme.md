# react-css-spinners

[![NPM version](https://img.shields.io/npm/v/react-css-spinners.svg)](https://www.npmjs.com/package/react-css-spinners)
[![Build Status](https://travis-ci.org/alex996/react-css-spinners.svg?branch=master)](https://travis-ci.org/alex996/react-css-spinners)
[![Coverage Status](https://coveralls.io/repos/github/alex996/react-css-spinners/badge.svg?branch=master)](https://coveralls.io/github/alex996/react-css-spinners?branch=master)
[![minified-size](https://img.shields.io/bundlephobia/min/react-css-spinners@latest.svg)](https://bundlephobia.com/result?p=react-css-spinners@latest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT License](https://img.shields.io/npm/l/react-css-spinners.svg)](https://github.com/alex996/react-css-spinners/blob/master/LICENSE)

![spinners](https://user-images.githubusercontent.com/15240969/61506027-cc63b180-a9ae-11e9-8569-9ee44ef3567c.gif)

CSS-only spinners for React from [loading.io](https://loading.io/css/)

- :scissors: &nbsp; **Zero** dependencies
- :collision: &nbsp; Written in **TypeScript**
- :rocket: &nbsp; **Tree-shaking** baked in
- :nail_care: &nbsp; No extra **CSS** imports

## Demo

Browse components and explore their props with [Storybook](https://alex996.github.io/react-css-spinners).

## Quick Start

Install the package with `npm`

```sh
npm i react-css-spinners
```

or `yarn` - whichever you prefer

```sh
yarn add react-css-spinners
```

Import any spinner you like

```js
import { Ellipsis } from 'react-css-spinners'
```

and use it like any other component

```js
const Loader = props => (
  <Ellipsis />
)
```

## Prerequisites

This library imports its styles through JavaScript. To make it work, you may need to tweak your config.

### Create-React-App

No changes are required, as CRA already handles CSS. Feel free to skip this! :tada:

### Webpack

First, you'd need [`css-loader`](https://github.com/webpack-contrib/css-loader) to resolve CSS imports

```sh
npm i -D css-loader
```

Next, to render your styles, you can either

- extract CSS into an external file (e.g. `style.css`) and load it using `<link>` (with [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)) or
- inject CSS into `<style>` tag(s) in `<head>` section at runtime (i.e. when JS is executing, with [`style-loader`](https://github.com/webpack-contrib/style-loader))

Generally, you'd want to generate your CSS only once at build time, so we'll go with the former

```sh
npm i -D mini-css-extract-plugin
```

Lastly, add the following to your `webpack.config.js`

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }
  ]
},
plugins: [new MiniCssExtractPlugin()]
```

For more advanced options (caching, minification, etc.), see [`mini-css-extract-plugin` docs](https://github.com/webpack-contrib/mini-css-extract-plugin).

### Webpack with SSR

As with the config above, you'd need `css-loader`. Unfortunately, you can't use either [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90) or [`style-loader`](https://github.com/webpack-contrib/style-loader/pull/159) with server-side rendering. One workaround would be to ignore CSS in server config and instead extract it out on the front-end. In your `webpack.config.js`

```js
module.exports = [
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()]
  },
  {
    module: {
      target: 'node',
      rules: [
        {
          test: /\.css$/i,
          loader: 'css-loader',
          options: {
            onlyLocals: true
          }
        }
      ]
    }
  }
]
```

There are a few other caveats, so it's best to check with a working [`SSR example`](./examples/ssr). An alternative to this would be to use [`isomorphic-style-loader`](https://github.com/kriasoft/isomorphic-style-loader). There is also [`babel-plugin-css-modules-transform`](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform) that can strip away `require` statements on CSS files (you'd need to include `react-css-spinners` under `babel-loader`).

### Rollup / Parcel

If you use Rollup, consider [`rollup-plugin-postcss`](https://github.com/egoist/,rollup-plugin-postcss). It exposes an `extract` option to extract your styles into a `.css` file. Alternatively, you could use [`rollup-plugin-scss`](https://github.com/thgh/rollup-plugin-scss) or [`rollup-plugin-css-only`](https://github.com/thgh/rollup-plugin-css-only) which would do the same thing.

Parcel comes with [built-in support](https://parceljs.org/css.html) for `.css` files and `@import`s, so this library should work out of the box.

## CDN

> Be advised that it's recommended to use NPM for best performance and minimal CSS & JS footprint.

For development and debugging, use an unminified version

```html
<link
  rel="stylesheet" crossorigin="anonymous"
  href="https://unpkg.com/react-css-spinners@latest/dist/style.css"
/>

<script src="https://unpkg.com/react-css-spinners@latest/dist/bundle.js" crossorigin></script>
```

In production, use a minified and optimized version

```html
<link
  rel="stylesheet" crossorigin="anonymous"
  href="https://unpkg.com/react-css-spinners@latest/dist/style.min.css"
/>

<script src="https://unpkg.com/react-css-spinners@latest/dist/bundle.min.js" crossorigin></script>
```

## Examples

You will find further demos under `/examples` folder

- [UMD via CDN](./examples/cdn)
- [Create-React-App](./examples/cra)
- [Server-Side Rendering](./examples/ssr)

## Copyright

CSS spinners from [loading.io](https://loading.io/css/) are used under [CC0 license](https://creativecommons.org/share-your-work/public-domain/cc0/).
