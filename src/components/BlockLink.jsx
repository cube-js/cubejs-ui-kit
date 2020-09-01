import React from 'react';
import ActionElement from './Action';

export default function BlockLink(props) {
  return ActionElement({ tag: 'nu-blocklink', ...props});
}

BlockLink.propTypes = ActionElement.propTypes;
