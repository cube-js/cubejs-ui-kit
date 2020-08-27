import React from 'react';
import { attrs } from '../helpers';

export default function CardBlock(props) {
  return <nu-card
    display="flex"
    content="center"
    items="center"
    flow="column"
    gap="--grid-gap"
    border="0"
    radius="1x"
    fill={props.bold ? 'dark-02' : (props.fill || 'bg')}
    color={props.bold ? 'white' : null}
    padding="7x 0||5x 0|5x --content-padding"
    width="initial (100% - (--content-padding * 2)) --max-content-width"
    shadow={props.bold ? '0' : 'card'}
    space="around"
    {...attrs(props)}>
    <nu-props text-soft-color={props.bold ? 'white' : ''}></nu-props>
    { props.children }
  </nu-card>
}
