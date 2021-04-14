import React from 'react';
import { attrs } from '../helpers';

export default function Grid(props) {
  return <nu-grid
    width="@content-width"
    columns="repeat(12, 1pr)|||1pr 1pr"
    gap="(@grid-gap * 2) @grid-gap"
    space="around"
    {...attrs(props)}>
    {props.children}
  </nu-grid>;
}
