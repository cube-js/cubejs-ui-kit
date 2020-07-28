import React from 'react';
import { filterAttrs, insertHTML } from '../helpers';
import Section from './Section.jsx';

export default function FeatureBlock(props) {
  let { heading, description, features } = props;

  features = features || [];

  return <Section padding="16x 6x|16x 2x|8x 2x" items="center" gap="12x|8x|6x|4x"
    {...filterAttrs(props)}>
    <nu-attrs for="description" size="lg|md"/>
    <nu-flow gap="4x|2x" text="center" width="max 30">
      <nu-h1 {...insertHTML(heading)}/>
      <nu-description size="lg||md" {...insertHTML(description)}/>
    </nu-flow>
    <nu-grid columns="1pr 1pr||1pr" gap="12x 4x|8x 4x|4x">
      {
        features.map(feature => {
          return <nu-grid
            columns="10 1fr|||1fr"
            key={feature.heading}
            gap="1x 0"
            text="left|||center"
            content="start stretch">
            <nu-img src={feature.image} row="1 / 3" height="6|||4" padding="1x"/>
            <nu-h4 text="nowrap" {...insertHTML(feature.heading)}/>
            <nu-description width="max 30" {...insertHTML(feature.description)}/>
          </nu-grid>;
        })
      }
    </nu-grid>
  </Section>
}
