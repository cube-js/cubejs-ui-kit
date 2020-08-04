import React from 'react';
import { filterAttrs } from '../helpers';

export default function Section(props) {
  return <nu-section
    fill={props.fill}
    shadow={props.shadow}
    border={props.border}>
    <nu-flex
      flow="column"
      width="max (--max-width + (--content-padding * 2))"
      place="space-around"
      gap="--grid-gap"
      {...filterAttrs(props, ['fill', 'shadow', 'border'])}>
      {props.children}
    </nu-flex>
  </nu-section>
}
