import React from 'react';
import { attrs } from '../helpers';

export default function Icon({ name, ...props }) {
  return <nu-icon name={name} {...attrs(props)}> </nu-icon>
}
