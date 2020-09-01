/** @jsx jsx */
import React from 'react';
import ActionElement from './Action';

export default function CardButton(props) {
  return ActionElement({ tag: 'nu-cardbtn', ...props});
}

CardButton.propTypes = ActionElement.propTypes;
