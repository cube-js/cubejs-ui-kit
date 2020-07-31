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
    shadow={props.bold ? '0' : '0px 20px 30px rgba(114, 114, 144, 0.05)'}
    place="space-around"
    {...filterAttrs(props)}>
    <nu-props text-soft-color={props.bold ? 'white' : ''}></nu-props>
    { props.children }
  </nu-card>
}
