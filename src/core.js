import './core.css';

const html = document.querySelector('html');
const dataset = html.dataset;

dataset.nuIcons = 'eva';
dataset.nuPrevent = '';
// dataset.nuScheme = 'light';

export const ready = import('./numl/index.js').then(module => {
  const { Nude } = module;

  Nude.init();

  return Nude;
});
