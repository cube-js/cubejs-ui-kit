/** @jsx jsx */
import React, { useState } from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';

import { attrs } from '../helpers';
import Button from './Button.jsx';

export default function ButtonGroup(props) {
  const { options } = props;
  const [value, setValue] = useState(props.value);

  function onInput(event) {
    setValue(event.detail);

    props.onInput && props.onInput(event.detail);
  }

  return <nu-btngroup
    value={value || options[0].id}
    width="min-content"
    onEventInput={onInput}
    {...attrs(props, ['value'])}>
    {
      options.map(option => {
        return <Button
          key={option.id}
          value={option.id}>
          {option.label}
        </Button>;
      })
    }
  </nu-btngroup>
}

ButtonGroup.propTypes = {
  onTap: T.func,
  value: T.string,
  options: T.arrayOf(T.shape({
    id: T.string,
    label: T.string,
  })).isRequired,
};
