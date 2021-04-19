import React from 'react';
import T from 'prop-types';

import { attrs, insertText } from '../helpers';

export default function Heading(props) {
  const Tag = props.level ? `h${props.level}` : 'h2';

  return <nu-headingwrapper size={Tag} {...attrs(props)}><Tag
    // role="heading"
    // level={props.level || 2}
    // aria-level={props.level || 2}
    {...(props.innerText ? insertText(props.innerText) : {})}>
    {!props.innerText ? props.children : null}
  </Tag></nu-headingwrapper>;
}

Heading.propTypes = {
  level: T.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
};
