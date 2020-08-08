/** @jsx jsx */
import React from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

import { attrs } from '../helpers';

export default function Action(props) {
  return <nu-action
    onEventTap={props.onTap}
    {...attrs(props)}>
    {props.children}
  </nu-action>
}

Action.propTypes = {
  onTap: T.func,
};
