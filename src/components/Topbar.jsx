/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import { main as mainLogo } from '../logos';
import { attrs } from '../helpers';

const MENU = [
  {
    label: 'Github',
    link: 'https://github.com/cube-js/cube.js'
  },
  {
    label: 'Docs',
    link: '/docs'
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
    link: '/blog'
  },
  {
    label: 'Cube Cloud',
    link: '/cloud'
  }
];

const MenuBtn = (props) => {
  return <nu-action
    as="menubtn"
    toggle
    pressed={props.pressed || undefined}
    color="dark-03 :active[dark-02]"
    fill="bg"
    width="8x"
    height="8x"
    place="top right"
    mark="hover #dark-03.10"
    onEventInput={evt => props.onInput(evt.detail)}
    {...attrs(props, ['pressed', 'toggle'])}>
    <nu-icon
      place="inside"
      name="^ menu :pressed[close-outline]"
      size="2"/>
  </nu-action>;
};

export default function Topbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuBtnClick(bool) {
    setIsMenuOpen(bool);
  }

  function onAction(evt) {
    setIsMenuOpen(false);
  }

  return <nu-header
    place={props.sticky ? 'sticky top' : ''}
    size="t2"
    padding={`${props.sticky ? 2 : 4}x --content-padding||2x --content-padding`}
    border={props.sticky ? 'bottom' : 'n'}
    box="y"
    fill="clear"
    {...attrs(props)}>

    <nu-pane width="--content-width" content="space-between" place="space-around">
      <nu-blocklink to="/" mark="n">
        <nu-svg
          id="logo"
          height="4.5x"
          src={mainLogo}
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

        <MenuBtn pressed={isMenuOpen} show="n||y" onInput={onMenuBtnClick}/>
      </nu-grid>
    </nu-pane>

    <nu-action
      id="overlay"
      place="fixed cover"
      fill="special-shadow 50%"
      hidden={!isMenuOpen || undefined}
      cursor="default"
      mark="n"
      onEventTap={() => setIsMenuOpen(false)}></nu-action>

    <nu-region
      id="sidemenu"
      place="fixed right"
      height="stretch"
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
      border="left">

      <MenuBtn pressed={isMenuOpen} onInput={onMenuBtnClick}/>

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
            to="#getting-started"
            onEventTap={onAction}>
            Get Started
          </nu-action>
        }
        {
          MENU.map(item => {
            return <nu-action
              key={item.label}
              to={item.link}
              onEventTap={onAction}>
              {item.label}
            </nu-action>;
          })
        }
      </nu-flow>
      <nu-block padding="0 2x">
        <nu-btn to="!https://github.com/cube-js/cube.js" onEventTap={onAction}>
          <nu-icon name="github"></nu-icon>
          Github
        </nu-btn>
      </nu-block>
    </nu-region>
  </nu-header>;
}
