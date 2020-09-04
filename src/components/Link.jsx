import React from 'react';
import ActionElement from './Action';
import { JsxInnerText } from '../helpers';

export default function Link(props) {
  return ActionElement({ tag: 'nu-link', ...props});
}

Link.propTypes = ActionElement.propTypes;
