/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import Button from './Button';
import { attrs } from '../helpers';

const DropdownIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.2 6.93333L1.2 1.6C0.705573 0.940764 1.17595 0 2 0H6H10C10.824 0 11.2944 0.940764 10.8 1.6L6.8 6.93333C6.4 7.46667 5.6 7.46667 5.2 6.93333Z" fill="currentColor"/>
  </svg>
);

export default function Select(props) {
  return <Button toggle purple value={props.value} onInput={props.onInput} {...attrs(props, ['multiple'])} content="space-between">
    <nu-value list="list"> </nu-value>
    <nu-svg width="12rp" space="1x right" color={props.special ? 'white' : 'main'}>
      <DropdownIcon/>
    </nu-svg>
    <nu-popuplistbox
      id="list" theme=""
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
