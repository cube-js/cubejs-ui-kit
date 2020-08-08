import { COMPONENT_LIST, SERVICE_LIST } from './list.js';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

config['size-limit'] = COMPONENT_LIST.map(component => {
  return {
    'name': `${component} Component`,
    'path': [
      `dist/components/${component}.js`
    ],
    'ignore': ['react', 'jsx-native-events'],
  };
}).concat(SERVICE_LIST.map(service => {
  return {
    'name': `${service} Service`,
    'path': [
      `dist/services/${service}.js`
    ],
    'ignore': ['react'],
  };
}));

fs.writeFileSync('./package.json', JSON.stringify(config, null, 2) + '\n', 'utf-8');

console.log('Size limit config generated');
