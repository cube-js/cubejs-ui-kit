/** @jsx jsx */
import React, { forwardRef } from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

import { attrs } from '../helpers';

const Input = (props, ref) => {
  function onInput(evt) {
    props.onInput && props.onInput(evt.detail);
  }

  return <nu-input
    ref={ref}
    is-big={props.big || null}
    onEventInput={onInput}
    label={props.placeholder}
    {...attrs(props)}/>
};

export default forwardRef(Input);

Input.propTypes = {
  onInput: T.func,
  big: T.bool,
};
