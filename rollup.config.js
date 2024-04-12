const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');

module.exports = {
  input: 'min/index.js',
  output: {
    dir: 'min',
    format: 'cjs'
  },
  plugins: [nodeResolve(), commonjs(), json()]
};