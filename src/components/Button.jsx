/** @jsx jsx */
import React from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

import { attrs } from '../helpers';

export default function Button(props) {
  return <nu-btn
    is-big={props.big || null}
    is-purple={props.purple || null}
    onEventTap={props.onTap}
    {...attrs(props)}>
    {props.children}
  </nu-btn>
}

Button.propTypes = {
  onTap: T.func,
  big: T.bool,
  purple: T.bool,
};
