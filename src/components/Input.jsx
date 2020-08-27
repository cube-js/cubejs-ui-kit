/** @jsx jsx */
import React, { forwardRef } from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

import { attrs } from '../helpers';

const MAP = {
  'text': 'input',
  'search': 'search',
  'email': 'emailinput',
};

const Input = (props, ref) => {
  const { onInput, type = 'text', ...otherProps } = props;
  const InputTag = `nu-${MAP[type]}`;

  function inputHandler(evt) {
    onInput && onInput(evt.detail);
  }

  return <InputTag
    ref={ref}
    is-big={props.big || null}
    onEventInput={inputHandler}
    label={props.placeholder}
    style={{ '--nu-special-color': 'var(--nu-purple-color)' }}
    {...attrs(otherProps)}/>
};

export default forwardRef(Input);

Input.propTypes = {
  onInput: T.func,
  big: T.bool,
};
