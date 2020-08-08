/** @jsx jsx */
import React from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

import { attrs, insertHTML } from '../helpers';

export default function FormField(props) {
  return <nu-field>
    { props.label && <nu-label {...insertHTML(props.label)}/> }
    <nu-input
      onEventInput={props.onInput}
      {...attrs(props)}/>
  </nu-field>
}

FormField.propTypes = {
  onInput: T.func,
};
