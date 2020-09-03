/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import Button from './Button';
import DropdownIcon from '../assets/icons/dropdown.svg';
import { attrs } from '../helpers';

export default function Select(props) {
  return <Button toggle purple value={props.value} onInput={props.onInput} {...attrs(props, ['multiple'])} content="space-between">
    <nu-value list="list"> </nu-value>
    <nu-svg src={DropdownIcon} width="12rp" space="1x right" color={props.special ? 'white' : 'main'}> </nu-svg>
    <nu-popuplistbox
      id="list" padding="0" gap={props.multiple ? '1bw' : '0'} theme=""
      special={props.special} radius="1r" link-value multiple={props.multiple}>
      {
        props.options.map(option => (
          <nu-option
            key={option.value} value={option.value}>
            { option.label }
          </nu-option>
        ))
      }
    </nu-popuplistbox>
  </Button>
}
