/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import { filterAttrs, insertHTML } from '../helpers';
import Section from './Section.jsx';

export default function SwitchBlock(props) {
  const { options } = props;

  return <Section
    fill="bg"
    padding="25x 0||16x 0"
    {...filterAttrs(props)}>
    <nu-grid
      width="10sp|||--full-width"
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
      <nu-h2 {...insertHTML(props.heading)} />
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
              id={`${option.id}-img`}
              label={`Illustration for ${option.heading}`}
              hidden
              {...(option.imageAttrs || {})}>
              <img src={option.image} alt="" />
            </nu-img>;
          })
        }
      </nu-block>
      <nu-block>
        <nu-attrs
          for="btn"
          fill="bg :pressed[special-bg]"
          color="main :pressed[special-text]"/>
        { options.length
          && <nu-btngroup value={options[0].id} width="min-content" fill="pink">
            {
              options.map(option => {
                return <nu-btn
                  key={option.id}
                  value={option.id}
                  control={`${option.id} ${option.id}-img`} is-red trigger>
                  {option.heading}
                </nu-btn>;
              })
            }
        </nu-btngroup>}
      </nu-block>
      {
        options.map(option => {
          return <nu-description
            key={option.id}
            id={option.id}
            height={props.contentHeight || 'min 25x||min 15x'}
            hidden>
            <nu-flow gap {...insertHTML(option.description)}/>
          </nu-description>
        })
      }
    </nu-grid>
  </Section>;
}
