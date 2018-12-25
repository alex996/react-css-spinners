import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import string from 'rollup-plugin-string'

const dist = 'dist'
const bundle = 'bundle'

const production = !process.env.ROLLUP_WATCH

const outputs = [
  {
    file: `${dist}/${bundle}.cjs.js`,
    format: 'cjs'
  },
  {
    file: `${dist}/${bundle}.esm.js`,
    format: 'esm'
  },
  {
    name: 'ReactCssSpinners',
    file: `${dist}/${bundle}.umd.js`,
    globals: {
      react: 'React'
    },
    format: 'umd'
  }
]

const common = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    string({
      include: '**/*.css'
    }),
    production && terser()
  ]
}

export default outputs.map(output => ({
  ...common,
  output
}))
