/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import { main as mainLogo } from '../logos';
import { attrs } from '../helpers';
import Link from './Link';
import Action from './Action';
import Button from './Button';
import BlockLink from './BlockLink';
import Image from './Image';
import Icon from './Icon';

const MENU = [

  {
    label: 'Docs',
    link: '/docs'
  },
  {
    label: 'Slack',
    link: '!https://slack.cube.dev/'
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
        label: 'Community',
        link: '/community',
        description: 'See how to contribute to Cube.js',
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
  return <Action
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
    <Icon
      place="inside"
      name="^ menu :pressed[close-outline]"
      transition="size"
      size="^ 3 :pressed[2]"/>
  </Action>;
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
    padding={`${props.sticky ? 2 : 4}x --content-padding||1x --content-padding`}
    border={props.sticky ? 'bottom' : 'n'}
    box="y"
    fill="clear"
    {...attrs(props)}>

    <nu-pane width="--content-width" content="space-between" space="around" height="50rp">
      <BlockLink to="/" mark="n">
        <Image
          id="logo"
          height="3.5x"
          src={mainLogo}
          label="Cube.js logo"
          filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
      </BlockLink>
      <nu-grid flow="column" gap="3x"
               items="center">
        <nu-pane gap>
          <nu-props
            outline-color="color(text 10%)"
          />
          <nu-attrs
            for="link"
            color="dark :hover[purple] :active.hover[purple]"
            padding="1x 2x"
            show="y||n"
            size="h5"
            text="n sb"
          />
          {
            MENU.map(item => {
              return item.items
                ? <Link key={item.label} clear>
                  <nu-el>{item.label}</nu-el>
                  <Icon name="chevron-down-outline" space=".75x right"/>
                  <nu-card
                    use-hover
                    show="^ n :hover.focus-within[y]" gap="0" border="1bw #light"
                    place={!props.getStarted ? 'outside-bottom right' : 'outside-bottom'}
                    size="t2" padding="0" fill="bg" overflow="n" z="front"
                    radius="1x" clear shadow="card">
                    <nu-attrs for="link" padding="3x" display="block" fill="clear :hover.focus[light 50%]"></nu-attrs>
                    {
                      item.items.map((item, i) => (
                        <Link id="sublink" key={item.label} clear to={item.link} border={i ? 'top #light' : null}>
                          <nu-flow>
                            <nu-block color="^#sublink dark :hover.pressed[purple]" transition="color">
                              {item.label}
                            </nu-block>
                            <nu-block color="dark-03" text="n nowrap">
                              {item.description}
                            </nu-block>
                          </nu-flow>
                        </Link>
                      ))
                    }
                  </nu-card>
                </Link>
                : <Link key={item.label} clear to={item.link}>{item.label}</Link>;
            })
          }
        </nu-pane>
        {/*<SchemeSwitch radius fill="clear" />*/}
        {
          props.getStarted && <Button
            as="get-started" show="y||n" to="#getting-started">
            Get Started
          </Button>
        }

        <MenuBtn pressed={isMenuOpen} show="n||y" onInput={onMenuBtnClick}/>
      </nu-grid>
    </nu-pane>

    <Action
      id="overlay"
      aria-hidden="true"
      place="fixed cover"
      fill="special-shadow 50%"
      hidden={!isMenuOpen || undefined}
      cursor="default"
      mark="n"
      onEventTap={() => setIsMenuOpen(false)}></Action>

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
          props.getStarted && <Action
            show="n||y"
            color="special"
            mark="#pink-hover.10 hover"
            text="sb"
            to="#getting-started"
            onEventTap={onAction}>
            Get Started
          </Action>
        }
        {
          MOBILE_MENU.map(item => {
            return <Action
              key={item.label}
              to={item.link}
              onEventTap={onAction}>
              {item.label}
            </Action>;
          })
        }
      </nu-flow>
      {/*<nu-block padding="0 2x">*/}
      {/*  <Button to="!https://github.com/cube-js/cube.js" onEventTap={onAction}>*/}
      {/*    <Icon name="github"/>*/}
      {/*    Github*/}
      {/*  </Button>*/}
      {/*</nu-block>*/}
    </nu-region>
  </nu-header>;
}
