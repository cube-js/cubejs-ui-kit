import React from 'react';
import { filterAttrs } from '../helpers';
import Grid from './Grid.jsx';

export default function CardBlock(props) {
  return <nu-card
    gap="4x"
    border="0"
    radius="1x"
    fill={props.bold ? 'dark-02' : (props.fill || 'bg')}
    color={props.bold ? 'white' : null}
    padding="7x 0||5x 0|5x --content-padding"
    width="initial (100% - (--content-padding * 2)) --max-width"
    shadow={props.bold ? '0' : '0px 20px 30px rgba(114, 114, 144, 0.05)'}
    place="space-around"
    {...filterAttrs(props)}>
    <nu-props text-soft-color={props.bold ? 'white' : ''}></nu-props>
    <Grid>
      { props.children }
    </Grid>
  </nu-card>
}
