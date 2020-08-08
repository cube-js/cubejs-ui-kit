import React from 'react';
import { attrs } from '../helpers';

export default function Section(props) {
  return <nu-section
    fill={props.fill}
    shadow={props.shadow}
    border={props.border}>
    <nu-flex
      flow="column"
      width="min-content (--max-content-width + (--content-padding * 2))"
      padding="0 --content-padding"
      place="space-around"
      gap="4x"
      {...attrs(props, ['fill', 'shadow', 'border'])}>
      {props.children}
    </nu-flex>
  </nu-section>
}
