import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const { NODE_ENV = 'development' } = process.env
const isProd = NODE_ENV === 'production'

export default {
  input: 'index.js',
  watch: {
    include: 'src/**'
  },
  external: [...Object.keys(pkg.dependencies)],
  plugins: [resolve(), cjs()],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: isProd
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: isProd
    }
  ]
}
