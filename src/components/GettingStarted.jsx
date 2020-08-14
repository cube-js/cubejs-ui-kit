import React from 'react';
import SiteBlock from './SiteBlock';

export default function GettingStarted(props) {
  return <SiteBlock
    pink
    heading="Getting Started">
    <nu-card padding="2x 8x" text="monospace" fill="bg" as="h4">
      $ npm install -g cubejs-cli
    </nu-card>
    <nu-block color="dark-03" as="t2">
      or follow our <nu-link>Getting Started</nu-link> guide.
    </nu-block>
  </SiteBlock>
}
