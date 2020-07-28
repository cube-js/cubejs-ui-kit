import React from 'react';
import { filterAttrs } from '../helpers';

export default function Section(props) {
  return <nu-section
    fill={props.fill}
    shadow={props.shadow}
    border={props.border}>
    <nu-flex
      flow="column"
      width="max 80"
      place="space-around"
      padding="2x"
      gap="2x"
      {...filterAttrs(props, ['fill', 'shadow', 'border'])}>
      {props.children}
    </nu-flex>
  </nu-section>
}
