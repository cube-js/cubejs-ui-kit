import React from 'react';
import T from 'prop-types';

import { attrs } from '../helpers';

export default function Heading(props) {
  const Tag = props.level ? `nu-h${props.level}` : 'nu-h2';

  return <Tag
    role="heading"
    level={props.level || 2}
    aria-level={props.level || 2}
    {...attrs(props)}>
    {props.children}
  </Tag>;
}

Heading.propTypes = {
  level: T.oneOf([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']),
};
