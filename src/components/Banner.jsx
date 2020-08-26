import React from 'react';
import { attrs } from '../helpers';

export default function Banner(props) {
  return <nu-blocklink
    display="grid"
    items="center"
    content="center"
    flow="column"
    fill="purple"
    color="white"
    size="t1|||t2"
    height="min 5x"
    gap="1x"
    text="center"
    padding="0 1cp"
    style={{ textDecorationColor: 'rgba(255, 255, 255, .4)' }}
    {...attrs(props)}>
    { props.children} →
  </nu-blocklink>;
}
