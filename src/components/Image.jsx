import React from 'react';
import { attrs } from '../helpers';

export default function Image({ src, label, loading, ...props}) {
  return <nu-img {...attrs(props)}>
    <img src={src} alt={label || ''} loading={loading}/>
  </nu-img>
}
