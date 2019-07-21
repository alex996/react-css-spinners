# Tooling

Rundown of the tooling setup in this library.

## Module systems

There are several module systems currently in use

- ES6 Modules (Node, browsers)
- CommonJS (Node)
- UMD (browsers)

In the past, we also had AMD/RequireJS (now obsolete). By far the best one is [ES modules (ESM)](https://github.com/rollup/rollup/wiki/ES6-modules), as it comes with

- static analysis -> tree shaking
- asyncronous module loading
- compact and terse syntax
- native [browser support](https://caniuse.com/#feat=es6-module) since [2017](https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7)
- next gen runtimes (e.g. [deno](https://github.com/denoland/deno))

## Cross-platform support

When building a library, you need to consider

1. application runtime (browser, Node, native, Electron)
2. distribution format (ESM, CJS, UMD) and medium (NPM, CDN)

In practice, this means that you need to accommodate different apps (SPA, SSR, PWA) and bundlers (Webpack, Parcel, Rollup).

## Use cases

Realistically, your users will fall into one of the following categories:

- static website that loads the lib via `<script>` tag from a CDN

- SPA that builds static HTML/CSS/JS assets with Webpack and Babel

- SSR that outputs isomorphic server (with critial CSS) and client builds

## Objectives

The ultimate goal is to provide the best dev experience. That often means

- convenient & intuitive API
- minimal footprint & runtime cost
- wide cross-browser support
- IDE type-checking & auto-completion
- useful warning messages in dev

For a React component lib that translates into

- named exports with tree shaking
- zero (or few) dependencies, small bundle size
- transpilation for specific browser targets
- TypeScript and/or Flow definitions
- prop-types definitions (stripped in prod)

## Builds

To provide for different deployment targets, we'll output several builds

- `cjs` -> CommonJS, practically only used in Node, thus ignores browser targets and uses ESNext
- `esm` -> ES Modules, only consumed by bundlers, only for browsers thus respects browserslist config
- `umd` -> UMD bundle, only used in browsers, no tree shaking

Most libraries and UI kits build CJS and ESM with Babel, and UMD with rollup. Webpack is [not used](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c) for libraries due to its overhead, but this [might change](https://github.com/webpack/webpack/issues/6386) in webpack 5.

## Targets

To provide for different module formats, we'll expose these [`package.json` fields](https://github.com/stereobooster/package.json)

- `main` -> CJS entrypoint and fallback

- `module` -> ESM entrypoint

- `types` (or `typings`) -> TS declaration file / entrypoint

- `unpkg` -> unpkg.com entrypoint file (overwrites `main`)

Because we require CSS to be bundled, we [cannot](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/102#issuecomment-384947142) mark the package as side effect free, thus

```json
"sideEffects": [
  "*.css"
]
```
