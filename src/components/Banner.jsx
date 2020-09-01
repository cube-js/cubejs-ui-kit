/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import Storage from '../services/storage';
import { attrs } from '../helpers';
import BlockLink from './BlockLink';

export default function Banner(props) {
  const [visible, setVisible] = useState(false);

  function onTap() {
    setVisible(false);

    Storage.set(key, false);
  }

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const key = `banner:${props.children}`;
      const storedVisible = Storage.get(key);
      const initialVisible = typeof props.children === 'string'
        ? (storedVisible != null ? storedVisible : true)
        : true;

      setVisible(initialVisible);
    }, 1500);
  }

  return <BlockLink
    display="grid"
    items="center"
    content="center"
    flow="column"
    fill="purple"
    color="white"
    size="t1|||t2"
    height="0 min-content --max-height"
    overflow="no"
    gap="1x"
    text="sb u center #white.0 :hover[sb u center #white]"
    transition="text, padding, height, opacity"
    opacity={visible ? '1' : '0'}
    padding={visible ? '.625x 1cp' : '0 1cp'}
    onEventTap={onTap}
    {...attrs(props)}>
    <nu-props
      max-height={visible ? '10x' : '0'}
      transition=".4s"
      text-transition=".08s"/>
    { props.children} →
  </BlockLink>;
}
