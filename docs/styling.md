# Styling

Rationale for the styling solution in RCS.

## Objectives

When designing an API, it's often useful to think backwards. How would I want to use this?

```jsx
import { Ellipsis } from 'react-css-spinners'

const Page = props => {
  if (props.loading) {
    return <Ellipsis />
  }

  return /* ... */
}
```

In a nutshell, I'd want to have

- zero dependencies for smallest JS/CSS footprint
- no lock-in, thus no CSS-in-JS or SASS/LESS/Stylus
- no runtime cost, thus no injections, only external CSS
- SSR support for critical path extraction
- CSS auto-import, don't have to `import` manually
- dead code elimination in CSS for faster FMP
- auto-prefixing, minification, cross-browser support
- scoped class names, isolation

## Approaches

1. pass styles inline via `style` prop

- can't use keyframes, pseudo elements / selectors, or media queries
- max specificity, subpar performance, no syntax highlight in JS

2. import `.css` as a string, interpolate into `<style>`, embed in `<body>` (v1)

- error-prone & has compat issues with webpack, jest (`"[object Object]"`)
- styles are duplicated when the component is used more than once

3. extract CSS at build time, import separately in JS/CSS/SASS/etc. (v2)

- have to import CSS manually for each component (exposes implementation details)
- separate entry-point for rollup & storybook to get CSS extracted

4. extract CSS at build time, import implicitly via JS (v3)

- don't have to import manually, but need build toolchain to resolve JS imports

5. use emotion / styled-components / etc.

- bundle size bloat, lock-in into specific styling solution

6. use linaria with no CSS runtime cost

- unnecessary bundle size overhead (`linaria/react`), thus sm. perf. hit
- uses CSS vars with React props, thus no support for IE 11
- have to import CSS manually

7. use CSS modules

- limited SSR support depending on the bundler

## Examples

Looking at a few libraries in the wild, here are a few conventions:

1. `@material-ui/core` -> uses JSS (both JS & CSS tree shaken)

2. `react-bootstrap` -> uses `className`s, CSS is not included (import from CDN, no tree shaking)

3. `react-toolbox` -> CSS modules with `themr` (both JS & CSS tree shaken)

4. `belle` -> inline styles, can't use advanced CSS (both JS & CSS tree shaken)

5. `material-components-web` -> SASS (both tree shaken, import styles manually)

## Verdict

Ultimately, I tried multiple options in v1 to v3 and settled with #4. I get tree shaking, zero deps, no runtime cost, and no lock-in. On the flip side, I sacrifice browser support (IE 11) and scoped classnames (global namespace).

Regular `style` prop would not suffice because some spinners use `@keyframes` rules that vary based on props. CSS files are copied over at build time. There's no pre-processing, thus class names are verbose and not scoped.
