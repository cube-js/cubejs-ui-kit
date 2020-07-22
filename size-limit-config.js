import LIST from './list.js';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

config['size-limit'] = LIST.map(component => {
  return {
    'name': `${component} Component`,
    'path': [
      `dist/${component}.js`
    ],
    'ignore': ['react', 'jsx-native-events']
  };
});

fs.writeFileSync('./package.json', JSON.stringify(config, null, 2), 'utf-8');

console.log('Size limit config generated');
