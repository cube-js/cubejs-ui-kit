import React from 'react';
import { filterAttrs } from '../helpers';

export default function Grid(props) {
  return <nu-grid
    width="12sp|||100%"
    columns="repeat(12, 1pr)|||1pr 1pr"
    gap="(--grid-gap * 2) --grid-gap"
    place="space-around"
    {...filterAttrs(props)}>
    {props.children}
  </nu-grid>;
}
