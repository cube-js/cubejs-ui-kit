import React from 'react';
import T from 'prop-types';

import { attrs } from '../helpers';

export default function Heading(props) {
  return <nu-heading
    level={props.level || 2}
    aria-level={props.level || 2}
    {...attrs(props)}>
    {props.children}
  </nu-heading>
}

Heading.propTypes = {
  level: T.oneOf([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']),
};
