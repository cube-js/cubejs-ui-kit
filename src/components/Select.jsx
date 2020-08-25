/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import Button from './Button';
import DropdownIcon from '../assets/icons/dropdown.svg';
import { attrs } from '../helpers';

export default function Select(props) {
  return <Button toggle special purple value={props.value} onInput={props.onInput} {...attrs(props)} content="space-between">
    <nu-value list="list"/>
    <nu-svg src={DropdownIcon} width="12rp" />
    <nu-popuplistbox
      id="list" padding="0" gap="0" theme="" special={props.special} radius="1r" link-value>
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
