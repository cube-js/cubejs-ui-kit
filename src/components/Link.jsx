/** @jsx jsx */
import React from 'react';
import ActionElement from './Action';

export default function Link(props) {
  return ActionElement({ tag: 'nu-link', ...props});
}

Link.propTypes = ActionElement.propTypes;
