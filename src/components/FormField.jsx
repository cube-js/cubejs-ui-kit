/** @jsx jsx */
import React from 'react';
import T from 'prop-types';
import jsx from '../utils/jsx-native-events';

import { attrs, insertText } from '../helpers';

export default function FormField(props) {
  return <nu-field>
    { props.label && <nu-label {...insertText(props.label)}/> }
    <nu-input
      onEventInput={props.onInput}
      {...attrs(props)}/>
  </nu-field>
}

FormField.propTypes = {
  onInput: T.func,
};
