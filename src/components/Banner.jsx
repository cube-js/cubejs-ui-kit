/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import Storage from '../services/storage';
import { attrs } from '../helpers';

export default function Banner(props) {
  const key = `banner:${props.children}`;
  const storedVisible = Storage.get(key);
  const initialVisible = typeof props.children === 'string'
    ? (storedVisible != null ? storedVisible : true)
    : true;
  const [visible, setVisible] = useState(initialVisible);

  function onTap() {
    setVisible(false);

    Storage.set(key, false);
  }

  return <nu-blocklink
    show={visible ? 'y' : 'n'}
    display="grid"
    items="center"
    content="center"
    flow="column"
    fill="purple"
    color="white"
    size="t1|||t2"
    height="min 5x"
    gap="1x"
    text="n u center #white.0 :hover[n u center #white]"
    transition="text"
    padding="0 1cp"
    onEventTap={onTap}
    {...attrs(props)}>
    { props.children} →
  </nu-blocklink>;
}
