import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import LIST from './list';

const babelConfig = {
  babelHelpers: 'bundled',
  'presets': [
    '@babel/preset-react'
  ],
}

function componentConfig(name) {
  return {
    input: `src/components/${name}.jsx`,
    external: [
      'jsx-native-events',
      'react',
      'react-dom',
      'prop-types'
    ],
    output: [{
      name: `${name} Component`,
      dir: './dist/',
      format: 'es',
    }],
    plugins: [
      terser(),
      resolve(),
      url(),
      babel(babelConfig),
    ]
  };
}

export default [{
  input: 'src/core.js',
  external: [
    'jsx-native-events',
    'react',
    'react-dom',
    'prop-types'
  ],
  output: [{
    name: 'CubeJS UI Kit',
    dir: './dist/',
    format: 'es',
  }],
  plugins: [
    terser(),
    resolve(),
    url(),
    babel(babelConfig),
    postcss(),
  ]
}, ...LIST.map(componentConfig)];
