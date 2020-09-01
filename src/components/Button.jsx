import React from 'react';
import ActionElement from './Action';

export default function Button(props) {
  return ActionElement({ tag: 'nu-btn', ...props});
}

Button.propTypes = ActionElement.propTypes;
