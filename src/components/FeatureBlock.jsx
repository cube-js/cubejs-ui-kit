import React from 'react';
import { filterAttrs, insertHTML } from '../helpers';
import Section from './Section.jsx';
import Grid from './Grid.jsx';

export default function FeatureBlock(props) {
  let { heading, description, features } = props;

  features = features || [];

  return <Section padding="16x 6x|16x 2x|8x 2x" items="center" gap="12x|8x|6x|4x"
    {...filterAttrs(props)}>
    <nu-attrs for="description" size="lg|md"/>
    <nu-flow gap="4x|2x" text="center" width="max 30">
      <nu-h2 {...insertHTML(heading)}/>
      <nu-description size="lg||md" {...insertHTML(description)}/>
    </nu-flow>
    <Grid gap="12x --grid-gap|||8x --grid-gap">
      {
        features.map(feature => {
          return <nu-grid
            columns="repeat(6, 1pr)||1fr"
            column="span 6|||span 2"
            gap="4x 0"
            key={feature.heading}
            text="left||center"
            content="start stretch">
            <nu-img
              class="nu-dark-invert"
              height="6||4" place="start center" column="1 / 3||1">
              <img src={feature.image} alt="" />
            </nu-img>
            <nu-flow gap="2x 0" column="3 / 7||1">
              <nu-h4 text="nowrap" {...insertHTML(feature.heading)}/>
              <nu-description {...insertHTML(feature.description)}/>
            </nu-flow>
          </nu-grid>;
        })
      }
    </Grid>
  </Section>
}
