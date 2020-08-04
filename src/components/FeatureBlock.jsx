import React from 'react';
import { filterAttrs, insertHTML } from '../helpers';
import Section from './Section.jsx';
import Grid from './Grid.jsx';

export default function FeatureBlock(props) {
  let { heading, description, features } = props;

  features = features || [];

  return <Section items="center"
                  {...filterAttrs(props)}>
    <nu-grid
      columns="1pr 1pr|||1pr"
      padding="17x 0||12x 0||10x 0"
      gap="12x --grid-gap||6x --grid-gap"
      items="start stretch">
      <nu-flow gap="2x" text="center" width="max 30" column="1 / -1" place="center">
        <nu-h2 {...insertHTML(heading)}/>
        <nu-description {...insertHTML(description)}/>
      </nu-flow>
      {
        features.map(feature => {
          return <nu-grid
            width="6sp|||1ps"
            columns="repeat(6, 1pr)||1fr"
            gap="4x 0"
            key={feature.heading}
            text="left||center"
            content="start stretch">
            <nu-img
              class="nu-dark-invert"
              height="6||4" place="start center" column="1 / 3||1">
              <img src={feature.image} alt=""/>
            </nu-img>
            <nu-flow gap="2x 0" column="3 / 7||1">
              <nu-h4 text="nowrap" {...insertHTML(feature.heading)}/>
              <nu-description {...insertHTML(feature.description)}/>
            </nu-flow>
          </nu-grid>;
        })
      }
    </nu-grid>
  </Section>
}
