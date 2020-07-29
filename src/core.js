const html = typeof document !== 'undefined' ? document.querySelector('html') : null;
const dataset = html ? html.dataset : {};

const OPTIONS = { icons: 'eva', prevent: true, scheme: 'light' };

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

      Nude.assign('nu-btn', 'styles', {
        text: 'n nowrap',
        inset: 'n',
        mark: 'hover #special.12 :special[hover #special-text.20]',
        border: `1bw :active[#special] :active:hover[#special] :special[hidden] :special:active[#special-text.66] :special:active:hover[#special-text.66] :special:hover[#special-text.20] :clear[hidden] :clear:active[1bw] :clear:hover[hidden]`,
        size: 'md :big[xl]',
        padding: '1x 2x :big[2x 4x]',
        width: 'auto :big[min 15]',
      });

      Nude.init();

      return Nude;
    });
  },
};
