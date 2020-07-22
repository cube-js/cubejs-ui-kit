const html = document.querySelector('html');
const dataset = html.dataset;

const OPTIONS = { icons: 'eva', prevent: false, scheme: 'light' };

export default {
  init(options = {}) {
    options = Object.assign({}, OPTIONS, options);

    dataset.nuIcons = options.icons;

    if (options.prevent) {
      dataset.nuPrevent = '';
    }

    dataset.nuScheme = options.scheme;

    return import('./numl/index.js').then(module => {
      const { Nude } = module;

      return Nude;
    });
  },
};
