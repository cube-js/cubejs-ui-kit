/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import Button from './Button';
import DropdownIcon from '../assets/icons/dropdown.svg';
import { attrs } from '../helpers';

export default function Select(props) {
  return <Button toggle special purple value={props.value} onInput={props.onInput} {...attrs(props)}>
    <nu-value list="list"/>
    <nu-svg src={DropdownIcon} width="12rp" />
    <nu-popuplistbox id="list" padding="1x 0" gap="0">
      {
        props.options.map(option => (
          <nu-option
            key={option.value} value={option.value} border="n :current[inside left 1ow #purple]"
            fill="clear :hover[light]">
            { option.label }
          </nu-option>
        ))
      }
    </nu-popuplistbox>
  </Button>
}
