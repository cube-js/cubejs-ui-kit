/** @jsx jsx */
import React from 'react';
import jsx from '../utils/jsx-native-events';
import { attrs } from '../helpers';
import BlockLink from './BlockLink';

export default function Banner(props) {
  return <BlockLink
    display="grid"
    items="center"
    content="center"
    flow="column"
    fill="#purple"
    color="#white"
    size="t1|||t2"
    height="0 min-content --max-height"
    overflow="no"
    gap="1x"
    text="sb u center #white.0 :hover[sb u center #white]"
    padding=".625x 1cp"
    {...attrs(props)}>
    <nu-props
      transition=".4s"
      text-transition=".08s"/>
    { props.children} →
  </BlockLink>;
}
