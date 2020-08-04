import React from 'react';
import { filterAttrs } from '../helpers';

export default function Grid(props) {
  return <nu-grid
    width="max --max-width"
    columns="repeat(12, 1pr)|||1pr 1pr"
    gap="(--grid-gap * 2) --grid-gap"
    {...filterAttrs(props)}>
    {props.children}
  </nu-grid>;
}
