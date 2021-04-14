import React from 'react';
import { attrs } from '../helpers';

export default function Section(props) {
  return <nu-section
    fill={props.fill}
    shadow={props.shadow}
    border={props.border}
    image={props.image}
    clip={props.clip}
    width="min 320px">
    <nu-flex
      flow="column"
      width="max (@max-content-width + (@content-padding * 2))"
      padding="0 @content-padding"
      space="around"
      gap="4x"
      {...attrs(props, ['fill', 'shadow', 'border', 'image', 'clip'])}>
      {props.children}
    </nu-flex>
  </nu-section>
}
