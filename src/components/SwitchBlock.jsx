/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import { filterAttrs, insertHTML } from '../helpers';
import Section from './Section.jsx';

export default function SwitchBlock(props) {
  const { options } = props;

  return <Section
    fill="bg"
    border="top"
    padding="16x 10x 16x||16x 2x 16x|8x 2x 8x"
    {...filterAttrs(props)}>
    <nu-grid
      columns="26 1fr||1fr"
      rows="auto auto 1fr"
      gap="4x 8x||4x"
      items="stretch||center"
      content="start"
      place="space-between">
      <nu-attrs
        for="description"
        size="lg||md"
        width="||max 30"
        text="left||center|left"/>
      <nu-h2 size="h1" {...insertHTML(props.heading)} />
      <nu-block
        row="1 / span 3||2"
        column="2||1"
        box="y"
        place="start end||center"
        class="nu-dark-invert"
        height="18||16|12" width="100%">
        <nu-attrs
          for="img"
          height="100%" width="100%"/>
        {
          options.map(option => {
            return <nu-img
              key={option.id}
              id={`${option.id}-img`}
              label={`Illustration for ${option.heading}`}
              hidden>
              <img src={option.image} alt="" />
            </nu-img>;
          })
        }
      </nu-block>
      <nu-block>
        {/*<nu-attrs*/}
        {/*  for="btn"*/}
        {/*  padding="1x 4x||1x 2x"*/}
        {/*  fill="bg :pressed[mark]"*/}
        {/*  border="center #special.20 :pressed[center #border]"*/}
        {/*  mark="hover :pressed[n]"*/}
        {/*  z=":pressed[above]"*/}
        {/*  color="text 80% :pressed[text]"/>*/}
        <nu-attrs
          for="btn"
          padding="1x 4x||1x 2x"
          fill="bg :pressed[special-bg]"
          color="text :pressed[special-text]"/>
        <nu-btngroup value="hybrid" width="min-content" padding="1bw / 2">
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
        </nu-btngroup>
      </nu-block>
      {
        options.map(option => {
          return <nu-description
            key={option.id}
            id={option.id}
            hidden>
            {option.description}
          </nu-description>;
        })
      }
    </nu-grid>
  </Section>;
}
