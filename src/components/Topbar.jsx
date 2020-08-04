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
    padding={`${props.sticky ? 2 : 4}x --content-padding||2x --content-padding`}
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
            as="get-started" show="y||n" to="#getting-started">
            Get Started
          </nu-btn>
        }

        <nu-action id="overlay" place="fixed cover" fill="special-shadow 50%" hidden></nu-action>

        <nu-region
          id="sidemenu"
          place="fixed right"
          height="100vh"
          z="front"
          size="t1"
          hidden
          width="15"
          padding="10x top"
          fill="bg"
          shadow="#special-shadow.50"
          opacity="1 :hidden[0]"
          move=":hidden[100% 0]"
          transition="move, opacity"
          text="right">
          <nu-attrs
            for="action"
            color="dark-03 :hover[text] :active.hover[dark-02]"
            padding="1x 2x"
            display="block"
            outline="focus inset"/>
          {
            props.getStarted && <nu-action
              show="n||y"
              color="special"
              mark="#pink-hover.10 hover"
              text="sb"
              to="#getting-started">
              Get Started
            </nu-action>
          }
          {
            MENU.map(item => {
              return <nu-action key={item.label} to={item.link}>{item.label}</nu-action>;
            })
          }
        </nu-region>

        <nu-btn
          id="menubtn"
          toggle
          color="dark-03"
          fill="bg"
          width="9x"
          height="9x"
          border="n :active[1bw outside #dark-03.30]"
          radius="n"
          show="n||y"
          place="top right"
          control="sidemenu overlay"
          mark="hover #dark-03.10"
          z="front">
          <nu-icon
            place="inside"
            name="^ menu :pressed[close-outline]"
            size="2"/>
        </nu-btn>
      </nu-grid>
    </nu-pane>
  </nu-header>;
}
