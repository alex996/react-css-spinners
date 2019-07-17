import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const input = 'src/index.ts'

const globals = {
  react: 'React'
}

const external = Object.keys(globals)

const extensions = ['.ts', '.tsx']

const plugins = [
  resolve({
    extensions
  }),
  babel({
    extensions,
    runtimeHelpers: true,
    exclude: 'node_modules/**',
    // remove prop-types, instead of unsafe-wrap
    plugins: ['transform-react-remove-prop-types']
  })
]

const output = {
  globals,
  name: 'ReactCssSpinners',
  format: 'umd'
}

export default [
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.js'
    },
    plugins: [
      ...plugins,
      postcss({
        extract: 'dist/style.css'
      })
    ]
  },
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.min.js'
    },
    plugins: [
      ...plugins,
      postcss({
        extract: 'dist/style.min.css',
        minimize: true
      }),
      terser()
    ]
  }
]
