/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import { main as mainLogo } from '../logos';
import { attrs } from '../helpers';

const MENU = [

  {
    label: 'Docs',
    link: '/docs'
  },
  {
    label: 'Slack',
    link: '!https://cubejs-community.herokuapp.com/'
  },
  {
    label: 'Resources',
    items: [

      {
        label: 'Examples',
        link: '!https://github.com/cube-js/cube.js#examples',
        description: 'See what\'s possible with Cube.js',
      },
      {
        label: 'Blog',
        link: '/blog',
        description: 'Learn more about Cube.js',
      },
      {
        label: 'GitHub',
        link: '!https://github.com/cube-js/cube.js',
        description: 'File an issue or contribute the code',
      },
      // {
      //   label: 'Cube Cloud',
      //   link: '/cloud'
      // }
    ],
  },
  {
    label: 'Cube Cloud',
    link: '/cloud',
  },
];

const MOBILE_MENU = MENU.reduce((list, link) => {
  if (link.items) {
    list.push(...link.items);
  } else {
    list.push(link);
  }

  return list;
}, []);

const MenuBtn = (props) => {
  return <nu-action
    as="menubtn"
    label="Toggle menu"
    toggle
    pressed={props.pressed || undefined}
    color="dark-03 :active[dark-02]"
    fill="clear :hover[white]"
    width="8x"
    height="8x"
    place="top right"
    mark="n"
    onEventInput={evt => props.onInput(evt.detail)}
    {...attrs(props, ['pressed', 'toggle'])}>
    <nu-icon
      place="inside"
      name="^ menu :pressed[close-outline]"
      transition="size"
      size="^ 3 :pressed[2]"/>
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
          height="4.5x||4x"
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
            text="n"
          />
          {
            MENU.map(item => {
              return item.items
                ? <nu-link key={item.label} clear>
                  <nu-el>{item.label}</nu-el>
                  <nu-icon name="chevron-down-outline" space=".75x right"/>
                  <nu-card
                    show="^ n :hover.focus-within[y]" gap="0" border="1bw #light"
                    place={!props.getStarted ? 'outside-bottom right' : 'outside-bottom'}
                    size="t2" padding="0" fill="bg" overflow="n" z="front"
                    radius="1x" clear shadow="0 20rp 30rp rgba(114, 114, 144, 0.05)">
                    <nu-attrs for="link" padding="3x" display="block" fill="clear :hover.focus[light 50%]"></nu-attrs>
                    {
                      item.items.map((item, i) => (
                        <nu-link id="sublink" key={item.label} clear to={item.link} border={i ? 'top #light' : null}>
                          <nu-flow>
                            <nu-block color="^#sublink dark :hover.pressed[purple]">
                              {item.label}
                            </nu-block>
                            <nu-block color="dark-03" text="nowrap">
                              {item.description}
                            </nu-block>
                          </nu-flow>
                        </nu-link>
                      ))
                    }
                  </nu-card>
                </nu-link>
                : <nu-link key={item.label} clear to={item.link}>{item.label}</nu-link>;
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
      aria-hidden="true"
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
          MOBILE_MENU.map(item => {
            return <nu-action
              key={item.label}
              to={item.link}
              onEventTap={onAction}>
              {item.label}
            </nu-action>;
          })
        }
      </nu-flow>
      {/*<nu-block padding="0 2x">*/}
      {/*  <nu-btn to="!https://github.com/cube-js/cube.js" onEventTap={onAction}>*/}
      {/*    <nu-icon name="github"></nu-icon>*/}
      {/*    Github*/}
      {/*  </nu-btn>*/}
      {/*</nu-block>*/}
    </nu-region>
  </nu-header>;
}
