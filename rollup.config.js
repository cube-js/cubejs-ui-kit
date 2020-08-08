import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { COMPONENT_LIST, SERVICE_LIST } from './list';

const babelConfig = {
  babelHelpers: 'bundled',
  'presets': [
    '@babel/preset-react'
  ],
};

const external = [
  'jsx-native-events',
  'react',
  'react-dom',
  'prop-types',
];

const plugins = [
  terser(),
  resolve(),
  url(),
  babel(babelConfig),
];

function componentConfig(name) {
  return {
    input: `src/components/${name}.jsx`,
    external,
    output: [{
      name: `${name} Component`,
      dir: './dist/components/',
      format: 'es',
    }],
    plugins,
  };
}

function serviceConfig(name) {
  return {
    input: `src/services/${name}.js`,
    external,
    output: [{
      name: `${name} Service`,
      dir: './dist/services/',
      format: 'es',
    }],
    plugins,
  };
}

export default [{
  input: 'src/core.js',
  external,
  output: [{
    name: 'CubeJS UI Kit',
    dir: './dist/',
    format: 'es',
  }],
  plugins,
},
  ...COMPONENT_LIST.map(componentConfig),
  ...SERVICE_LIST.map(serviceConfig),
];
