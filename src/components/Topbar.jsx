/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import logo from '../assets/cubejs-logo.svg';

const MENU = [
  {
    label: 'Github',
    link: 'https://github.com/cube-js/cube.js'
  },
  {
    label: 'Docs',
    link: '!https://cube.dev/docs'
  },
  {
    label: 'Community',
    link: '!https://cubejs-community.herokuapp.com/'
  },
  {
    label: 'Examples',
    link: '!https://github.com/cube-js/cube.js#examples'
  },
  {
    label: 'Blog',
    link: 'https://cube.dev/blog'
  },
  {
    label: 'Cube Cloud',
    link: 'https://cube.dev/cloud'
  }
];

export default function Topbar() {
  return <nu-pane
    content="space-between" size="md" theme="secondary" padding="2x"
    width="max 80" box="y" place="space-around">
  <nu-svg
    id="logo"
    width="8"
    src={logo}
    label="Cube.js logo"
    theme="main"
    filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
  <nu-pane>
    <nu-pane gap="0">
      <nu-attrs
        for="btn"
        color="main-text"
        show="y||n"
        theme="menu"/>
      {
        MENU.map(item => {
          return <nu-btn key={item.label} clear to={item.link}>{ item.label }</nu-btn>;
        })
      }
    </nu-pane>
    <nu-btn
      as="get-started" border special is-red fill="bg :hover[special-bg]"
      color="text :hover[special-text]" to="#getting-started">
      Get Started
    </nu-btn>
    <nu-btn toggle padding="1x" show="n||y" is-red>
      <nu-icon name="menu"/>
      <nu-popup
        padding="1x 0"
        width="10"
        place="outside-bottom right"
        transition="transform, opacity"
        opacity="1 :hidden[0]"
        scale=":hidden[1 .5]">
        <nu-attrs
          for="action"
          padding
          display="block"
          outline="focus inset"
          theme="menu"/>
        {
          MENU.map(item => {
            return <nu-action key={item.label} to={item.link}>{ item.label }</nu-action>;
          })
        }
      </nu-popup>
    </nu-btn>
  </nu-pane>
</nu-pane>;
}
