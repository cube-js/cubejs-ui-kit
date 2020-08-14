/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import { attrs, insertHTML } from '../helpers';
import Section from './Section.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import Heading from './Heading.jsx';

export default function SwitchBlock(props) {
  const { options } = props;
  const [value, setValue] = useState(props.value || (options.length && options[0].id));

  const groupOptions = options.map(option => {
    return {
      id: option.id,
      label: option.heading,
    };
  });

  return <Section
    fill="bg"
    padding="25x 0||16x 0"
    {...attrs(props)}>
    <nu-grid
      width="10sp|||--content-width"
      columns="1pr 1pr||1fr"
      rows="auto auto 1fr"
      gap="4x --grid-gap"
      items="stretch||center"
      content="start"
      place="space-around">
      <nu-attrs
        for="description"
        text="left||center"
        width="max 4sp||auto"/>
      <Heading>
        <nu-el {...insertHTML(props.heading)}/>
      </Heading>
      <nu-block
        row="1 / span 3||4"
        column="2||1"
        box="y"
        place="start center"
        class="nu-dark-invert"
        height="48x||16" width="100%">
        <nu-attrs
          for="img"
          height="100%" width="100%"/>
        {
          options.map(option => {
            return <nu-img
              key={option.id}
              label={`Illustration for ${option.heading}`}
              hidden={value !== option.id || null}
              {...(option.imageAttrs || {})}>
              <img src={option.image} alt=""/>
            </nu-img>;
          })
        }
      </nu-block>
      <nu-block>
        <nu-attrs
          for="btn"
          fill="bg :pressed[special-bg]"
          color="main :pressed[special-text]"/>
        {options.length
        && <ButtonGroup
          options={groupOptions}
          value={value}
          onInput={val => setValue(val)}/>}
      </nu-block>
      {
        options.map(option => {
          return <nu-description
            key={option.id}
            height={props.contentHeight || 'min 25x||min 15x'}
            hidden={value !== option.id || null}>
            <nu-flow gap {...insertHTML(option.description)}/>
          </nu-description>
        })
      }
    </nu-grid>
  </Section>;
}
