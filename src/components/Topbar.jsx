/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import { logo } from '../images';
import SchemeSwitch from './SchemeSwitch.jsx';

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
  return <nu-header
    display="flex" flow="row" content="space-between" size="md" theme="secondary" padding="4x||2x"
    width="max 80" box="y" place="space-around" fill="clear">
    <nu-blocklink to="/" theme="main" mark="1x hover" radius mark="n">
      <nu-svg
        id="logo"
        height="2.5"
        src={logo}
        label="Cube.js logo"
        filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
    </nu-blocklink>
    <nu-grid flow="column" gap items="center">
      <nu-pane gap="0">
        <nu-props outline-color="color(text 10%)"></nu-props>
        <nu-attrs
          for="link"
          color="dark-03 :hover[text] :active.hover[dark-02]"
          padding="1x 2x"
          show="y||n"/>
        {
          MENU.map(item => {
            return <nu-link key={item.label} clear to={item.link}>{item.label}</nu-link>;
          })
        }
      </nu-pane>
      {/*<SchemeSwitch theme="secondary" radius fill="clear" />*/}
      <nu-btn
        as="get-started" show="y|||n" special to="#getting-started">
        Get Started
      </nu-btn>
      <nu-btn toggle padding="1x" show="n||y" is-red fill="clear">
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
            color="main-text"
            display="block"
            outline="focus inset"/>
          <nu-action
            show="n|||y"
            color="text" theme="secondary" color="text :hover[special-text]" to="#getting-started">
            Get Started
          </nu-action>
          {
            MENU.map(item => {
              return <nu-action key={item.label} to={item.link}>{item.label}</nu-action>;
            })
          }
        </nu-popup>
      </nu-btn>
    </nu-grid>
  </nu-header>;
}
