import React from 'react';
import { attrs } from '../helpers';

export default function Grid(props) {
  return <nu-grid
    width="12sp|||100%"
    columns="repeat(12, 1pr)|||1pr 1pr"
    gap="(--grid-gap * 2) --grid-gap"
    place="space-around"
    {...attrs(props)}>
    {props.children}
  </nu-grid>;
}
