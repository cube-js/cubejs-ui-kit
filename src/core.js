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
        text: 'n b nowrap :clear[n sb nowrap]',
        inset: 'n',
        border: `#main.60 :active[#main] :active:hover[#main] :clear[hidden] :hover:clear[hidden] :active:clear[#main.60] :active:hover:clear[#main.60] :special[#main] :special:hover[#hover] :special:hover:active[#hover] :special:active[#main]`,
        color: 'hover :special[white]',
        fill: 'clear :special[main] :special:hover[hover] :special:hover:active[main] :special:active[hover]',
        mark: 'hover #hover.10 :special[n]',
        size: 'md :big[t1]',
        padding: '1x 2x :big[1.875x 4x]',
        width: 'auto :big[min 15]',
        '--main-color': '--pink-color :purple[--purple-color]',
        '--main-color-rgb': '--pink-color-rgb :purple[--purple-color-rgb]',
        '--hover-color': '--pink-hover-color :purple[--purple-hover-color]',
        '--hover-color-rgb': '--pink-hover-color-rgb :purple[--purple-hover-color-rgb]',
        '--outline-color': '--pink-outline-color :purple[--purple-outline-color]',
      });

      Nude.assign('nu-input', 'styles', {
        border: '#input-border :invalid[#pink] :focus.invalid[#clear]',
        padding: '1.75x 2x',
        color: 'dark-02 :invalid[pink]',
        size: 't1',
        '--outline-color': '--purple-outline-color :invalid[--pink-outline-color]',
      });

      Nude.assign('nu-label', 'styles', {
        color: 'dark-03',
        text: 'n',
      });

      Nude.assign('nu-field', 'styles', {
        flow: 'column',
        gap: '1x',
      });

      Nude.assign('nu-link', 'styles', {
        text: 'n',
        mark: 'n',
      });

      Nude.init();

      return Nude;
    });
  },
};
