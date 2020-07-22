import './core.css';

const html = document.querySelector('html');
const dataset = html.dataset;

dataset.nuIcons = 'eva';
dataset.nuPrevent = '';
dataset.nuScheme = 'light';

const OPTIONS = { icons: 'eva', prevent: false, scheme: 'light' };

export default {
  init({ icons, prevent, scheme } = {}) {
    return import('./numl/index.js').then(module => {
      const { Nude } = module;

      Nude.init();

      return Nude;
    });
  },
};
