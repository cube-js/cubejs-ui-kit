/** @jsx jsx */
import React from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

export default function Button(props) {
  const { big, purple, onTap, ...otherProps } = props;

  return <nu-btn
    is-big={big || null}
    is-purple={purple || null}
    onEventTap={onTap}
    {...otherProps}>
    {props.children}
  </nu-btn>
}

Button.propTypes = {
  onTap: T.func,
  big: T.bool,
  purple: T.bool,
};
