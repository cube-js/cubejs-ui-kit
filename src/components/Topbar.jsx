/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import { logo } from '../images';
import { attrs } from '../helpers';

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

const MenuBtn = (props) => {
  return <nu-btn
    as="menubtn"
    toggle
    pressed={props.pressed || undefined}
    color="dark-03"
    fill="bg"
    width="8x"
    height="8x"
    border="n :active[1bw outside #dark-03.30]"
    radius="n"
    place="top right"
    mark="hover #dark-03.10"
    onEventInput={evt => props.onInput(evt.detail)}
    {...attrs(props, ['pressed', 'toggle'])}>
    <nu-icon
      place="inside"
      name="^ menu :pressed[close-outline]"
      size="2"/>
  </nu-btn>;
};

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuBtnClick(bool) {
    setIsMenuOpen(bool);
  }

  return <nu-header
    place={props.sticky ? 'sticky top' : ''}
    size="t2"
    padding={`${props.sticky ? 2 : 4}x --content-padding||2x --content-padding`}
    border={props.sticky ? 'bottom' : 'n'}
    box="y"
    fill="clear">

    <nu-pane width="--full-width" content="space-between" place="space-around">
      <nu-blocklink to="/" mark="n">
        <nu-svg
          id="logo"
          height="4x"
          src={logo}
          label="Cube.js logo"
          filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
      </nu-blocklink>
      <nu-grid flow="column" gap="3x"
        items="center">
        <nu-pane gap>
          <nu-props
            outline-color="color(text 10%)"
          />
          <nu-attrs
            for="link"
            color="dark-03 :hover[text] :active.hover[dark-02]"
            padding="1x 2x"
            show="y||n"
          />
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

        <nu-action
          id="overlay"
          place="fixed cover"
          fill="special-shadow 50%"
          hidden={!isMenuOpen || undefined}></nu-action>

        <nu-region
          id="sidemenu"
          place="fixed right"
          height="100vh"
          z="front"
          size="t1"
          is-shown={isMenuOpen || undefined}
          gap="2x"
          width="15"
          padding="10x top"
          fill="bg"
          shadow="#special-shadow.50"
          opacity="0 :shown[1]"
          move="100% 0 :shown[]"
          transition="move, opacity"
          text="right"
          border="left"
          onClick={() => setIsMenuOpen(false)}>

          <MenuBtn pressed={isMenuOpen} onInput={onMenuBtnClick} />

          <nu-flow>
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
                return <nu-action
                  key={item.label}
                  to={item.link}>
                  {item.label}
                </nu-action>;
              })
            }
          </nu-flow>
          <nu-block padding="0 2x">
            <nu-btn to="!https://github.com/cube-js/cube.js">
              <nu-icon name="github"></nu-icon>
              Github
            </nu-btn>
          </nu-block>
        </nu-region>

        <MenuBtn pressed={isMenuOpen} show="n||y" onInput={onMenuBtnClick} />
      </nu-grid>
    </nu-pane>
  </nu-header>;
}
