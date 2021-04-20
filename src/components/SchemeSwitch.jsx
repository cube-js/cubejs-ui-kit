/** @jsx jsx */
import React, { useState } from 'react';
import jsx from '../utils/jsx-native-events';
import { attrs } from '../helpers';
import Button from './Button';
import Icon from './Icon';

const dataset = typeof document !== 'undefined' ? document.documentElement.dataset : {};

export default function SchemeSwitch(props) {
  let media = typeof matchMedia !== 'undefined'
    ? matchMedia('(prefers-color-scheme: dark)')
    : { addListener() {} };

  function getCurrentScheme() {
    return (dataset.nuScheme !== 'auto' && dataset.nuScheme) || (media.matches ? 'dark' : 'light');
  }

  const [scheme, setScheme] = useState('light');

  if (typeof window !== 'undefined') {
    setInterval(() => {
      setScheme(getCurrentScheme());
    }, 500);
  }

  media.addListener((newMedia) => {
    media = newMedia;

    setScheme(getCurrentScheme());
  });

  function changeScheme(event) {
    const value = event.detail;

    setScheme(value);

    dataset.nuScheme = value;
  }

  return <Button
    onEventInput={changeScheme}
    toggle value="dark" off-value="light"
    radius="round"
    inset="n :active[#shadow.50]"
    pressed={scheme === 'dark' || null}
    padding
    {...attrs(props)}>
    <Icon name="^ moon :pressed[sun]"/>
  </Button>
}
