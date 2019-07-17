# react-css-spinners

[![NPM version](https://img.shields.io/npm/v/react-css-spinners.svg)](https://www.npmjs.com/package/react-css-spinners)
[![Build Status](https://travis-ci.org/alex996/react-css-spinners.svg?branch=master)](https://travis-ci.org/alex996/react-css-spinners)
[![Coverage Status](https://coveralls.io/repos/github/alex996/react-css-spinners/badge.svg?branch=master)](https://coveralls.io/github/alex996/react-css-spinners?branch=master)
[![minified-size](https://img.shields.io/bundlephobia/min/react-css-spinners@latest.svg)](https://bundlephobia.com/result?p=react-css-spinners@latest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT License](https://img.shields.io/npm/l/react-css-spinners.svg)](https://github.com/alex996/react-css-spinners/blob/master/LICENSE)

CSS-only spinners for React in TypeScript. See a [live demo](https://alex996.github.io/react-css-spinners).

## Installation

### npm

```sh
npm i react-css-spinners
```

### yarn

```sh
yarn add react-css-spinners
```

### unpkg

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

## Getting Started

Make sure that your build toolchain supports CSS files. For example, with Webpack you can use [`css-loader`](https://github.com/webpack-contrib/css-loader) and/or [`sass-loader`](https://github.com/webpack-contrib/sass-loader). If you have Rollup, consider [`rollup-plugin-postcss`](https://github.com/egoist/,rollup-plugin-postcss). Alternatively, Parcel has support for `.css` files and `@import`s out of the box.

You have the choice of extracting CSS into an external stylesheet (ex: [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)) or injecting CSS modules at runtime (ex: [`style-loader`](https://github.com/webpack-contrib/style-loader)). Both are only intended for browsers, so if you need SSR support, you can either not bundle CSS server-side ([`onlyLocals` option in `css-loader`](https://github.com/webpack-contrib/css-loader#onlylocals)) and instead extract/inject it client-side, or use [`isomorphic-style-loader`](https://github.com/kriasoft/isomorphic-style-loader) for critical path extraction. There is also [`babel-plugin-css-modules-transform`](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform) that can strip away `require('./style.css')` statements (you'd need to include `react-css-spinners` for `babel-loader`).

Also, be sure to install `react` (and `react-dom`) as it's a peer dependency of this library. If you use CommonJS exports, you'd also need to install `@babel/runtime`.

## Usage

Import any spinner of your choice and use it as usual - the styles will be auto-imported for you. You can safely use named imports, as both JS and CSS will go through dead code elimination in production builds!

```js
import React from 'react'
import { render } from 'react-dom'
import { Ellipsis } from 'react-css-spinners'

const Loader = props => (
  <>
    <Ellipsis />
    <p>Loading...</p>
  </>
)

render(<Loader />, document.getElementById('app'))
```

## Examples

You will find further demos under `/examples` folder

- [UMD via CDN](./examples/cdn)
- [Create-React-App](./examples/cra)
- [Server-Side Rendering](./examples/ssr)

## Styling

This library doesn't make assumptions about the end user's styling solution. As such, it doesn't lock you into a CSS-in-JS library, such as `emotion` or `styled-components`, to avoid bundle size overhead. It doesn't rely on CSS modules either, since they have limited SSR support depending on the bundler (as in `rollup` for example).

Prior, it used to embed CSS in a `style` tag with each component, but that led to duplication if you used the same spinner more than once. Now, the library ships with dedicated CSS files which you can manually import for each component, thus minimizing overall CSS footprint.

## Copyright

CSS spinners from [loading.io](https://loading.io/css/) under CC0.
