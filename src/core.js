import { spanWidth } from './helpers';
import slackIcon from './assets/icons/slack.svg';
import twitterIcon from './assets/icons/twitter.svg';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import cbIcon from './assets/icons/cb.svg';
import angelListIcon from './assets/icons/angellist.svg';

const html = typeof document !== 'undefined' ? document.querySelector('html') : null;
const dataset = html ? html.dataset : {};

const OPTIONS = { icons: 'eva', prevent: false, scheme: 'light' };

function loadIcon(url) {
  return fetch(url).then(response => response.text());
}

export default {
  init(options = {}) {
    options = Object.assign({}, OPTIONS, options);

    dataset.nuIcons = options.icons;

    if (options.prevent) {
      dataset.nuPrevent = '';
    }

    dataset.nuScheme = options.scheme;

    window.addEventListener('nudeReady', (event) => {
      const { Nude } = window;

      Nude.units.define('sp', spanWidth);

      Nude.icons.setLoader((name) => {
        switch (name) {
          case 'slack':
            return loadIcon(slackIcon);
          case 'twitter':
            return loadIcon(twitterIcon);
          case 'github':
            return loadIcon(githubIcon);
          case 'linkedin':
            return loadIcon(linkedinIcon);
          case 'cb':
            return loadIcon(cbIcon);
          case 'angellist':
            return loadIcon(angelListIcon);
          default:
            return Nude.icons.loaders.eva(name);
        }
      });

      Nude.assign('nu-root', {
        attrsFor: {
          description: {
            color: 'dark-03',
            size: 't1',
          },
          h1: { size: 'h1', text: 'h' },
          h2: { size: 'h2', text: 'h' },
          h3: { size: 'h3', text: 'h' },
          h4: { size: 'h4', text: 'h' },
          h5: { size: 'h5', text: 'h' },
          t1: { size: 't1', text: 'n' },
          t2: { size: 't2', text: 'n' },
          c1: { size: 'c1', text: 'n up spacing(0.02em)' },
          c2: { size: 'c2', text: 'n up spacing(0.02em)' },
          p1: { size: 'p2', text: 'n' },
        },
      });

      Nude.assign('nu-btn', {
        styles: {
          text: 'b nowrap :clear[n sb nowrap] :special[b nowrap]',
          inset: 'n',
          border: `#main.60 :active[#main] :active:hover[#main] :clear[hidden] :hover:clear[hidden] :active:clear[#main.60] :active:hover:clear[#main.60] :special[#main] :special:hover[#hover] :special:hover:active[#hover] :special:active[#main]`,
          color: 'main :active[hover] :special[white] :special:active[white]',
          fill: 'clear :special[main] :special:hover[hover] :special:hover:active[main] :special:active[hover]',
          mark: 'hover #hover.10 :special[n]',
          size: 't2 :big[t1]',
          padding: '1.375x 2.5x :big[1.875x 2.5x]',
          '--main-color': '--pink-color :purple[--purple-color]',
          '--main-color-rgb': '--pink-color-rgb :purple[--purple-color-rgb]',
          '--hover-color': '--pink-hover-color :purple[--purple-hover-color]',
          '--hover-color-rgb': '--pink-hover-color-rgb :purple[--purple-hover-color-rgb]',
          '--outline-color': '--pink-outline-color :purple[--purple-outline-color]',
          '--outline-width': '(3rem / 16) :special[1rem / 4]',
        },
      });

      Nude.assign('nu-input', {
        styles: {
          border: '#input-border :invalid[#pink] :focus.invalid[#clear]',
          padding: '1.375x 2.5x :big[1.875x 2.5x]',
          color: 'dark-02 :invalid[pink]',
          size: 't2 :big[t1]',
          '--outline-color': '--purple-outline-color :invalid[--pink-outline-color]',
          '--outline-width': '1rem / 4',
        },
      });

      Nude.assign('nu-textarea', {
        styles: {
          padding: '1.375x 2.5x :big[1.875x 2.5x]',
          height: '3lh + 2.75x + 2bw :big[3lh + 3.75x + 2bw]',
        },
      });

      Nude.assign('nu-fileinput', {
        styles: {
          padding: '1.375x 2.5x :big[1.875x 2.5x]',
          mark: 'n',
        },
        template: `
          <nu-block place="cover" opacity="0" overflow="n"><input/></nu-block>
          <nu-block as="t2" radius="round" padding="0 2x" fill="light">Choose file</nu-block>
          <nu-value placeholder="No file selected"></nu-value>        
        `,
      });

      Nude.assign('nu-card', {
        styles: {
          fill: 'pink 20% :purple[light]',
          gap: '3x',
          border: 'n',
          padding: '4x',
          radius: '1x',
        },
      });

      Nude.assign('nu-btngroup', {
        styles: {
          fill: 'pink',
          border: '#pink.60',
        },
      });

      Nude.assign('nu-label', {
        styles: {
          color: 'dark-03',
          text: 'n',
        },
      });

      Nude.assign('nu-field', {
        styles: {
          flow: 'column',
          gap: '1x',
        },
      });

      Nude.assign('nu-link', {
        styles: {
          text: 'n',
          mark: 'n',
        },
      });

      Nude.assign('nu-grid', {
        styles: {
          items: 'start stretch',
          gap: '--grid-gap',
        },
      });

      Nude.assign('nu-description', {
        styles: {
          size: 't1',
          text: 'n',
        },
      });

      Nude.assign('nu-line', {
        styles: {
          fill: 'dark-05 50%',
        },
      });

      Nude.assign('nu-code', {
        styles: {
          fill: '#2B2B58',
          '--com-color': 'hue(0 0 low special)',
          '--spc-color': 'color(white)',
          '--nam-color': 'color(white)',
          '--key-color': 'color(purple)',
          '--num-color': 'color(purple)',
          '--pct-color': 'hue(0 0 0 60 special)',
          '--rex-color': 'color(pink)',
          '--str-color': 'color(pink)',
          '--unk-color': 'color(white)',
          '--pls-color': 'hue(180 70 10 special)',
          '--mns-color': 'color(pink)',
          '--mrk-color': 'color(purple)',
          '--mrk-bg-color': 'hue(240 70 3 special)',
          '--scrollbar-bg-color': '#2B2B58',
          '--scrollbar-border-color': '#2B2B58',
          '--scrollbar-thumb-color': 'color(white 60%)',
        },
        attrs: {
          special: '',
        },
      });

      Nude.assign('nu-progressbar', {
        styles: {
          border: 'n',
          height: '.75x',
        },
      });
    });

    return import('./numl');
  },
};
