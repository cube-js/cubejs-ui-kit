/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import { logo } from '../images';

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

export default function Topbar(props) {
  return <nu-header
    place={props.sticky ? 'sticky top' : ''}
    size="md"
    padding={`${props.sticky ? 2 : 4}x --content-padding`}
    border={props.sticky ? 'bottom' : 'n'}
    box="y"
    fill="clear">
    <nu-pane width="--full-width" content="space-between" place="space-around">
      <nu-blocklink to="/" mark="n">
        <nu-svg
          id="logo"
          height="5x"
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
        {/*<SchemeSwitch radius fill="clear" />*/}
        {
          props.getStarted && <nu-btn
            as="get-started" show="y|||n" to="#getting-started">
            Get Started
          </nu-btn>
        }
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
              color="text :hover[special-text]"
              to="#getting-started">
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
    </nu-pane>
  </nu-header>;
}
