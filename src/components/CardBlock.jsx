import React from 'react';
import { filterAttrs } from '../helpers';

export default function CardBlock(props) {
  return <nu-card
    border="0"
    radius="1x"
    fill={props.bold ? 'bold-bg' : (props.fill || 'bg')}
    color={props.bold ? 'white' : null}
    padding="6x||4x"
    width="initial (100% - 4x) 76"
    theme={props.bold ? 'bold special' : ''}
    shadow={props.bold ? '0' : '2x'}
    place="space-around"
    {...filterAttrs(props)}>
    { props.children }
  </nu-card>
}
