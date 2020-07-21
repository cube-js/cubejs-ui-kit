/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';

const dataset = typeof document !== 'undefined' ? document.documentElement.dataset : {};

export default function SchemeSwitch() {
  const [scheme, setScheme] = useState(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function changeScheme(event) {
    const value = event.detail;

    setScheme(value);

    dataset.nuScheme = value;
  }

  return <nu-btn
    onEventInput={changeScheme}
    toggle value="dark" off-value="light"
    theme="swap"
    radius="round"
    inset="n :active[#shadow.50]"
    pressed={scheme === 'dark' || null}
    padding>
    <nu-icon name="^ moon :pressed[sun]"></nu-icon>
  </nu-btn>
}
