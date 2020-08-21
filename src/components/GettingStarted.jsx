import React from 'react';
import SiteBlock from './SiteBlock.jsx';
import { attrs } from '../helpers';

export default function GettingStarted(props) {
  return <SiteBlock
    id="getting-started"
    pink
    heading="Get started with Cube.js"
    {...attrs(props)}>
    <nu-card padding="2x 8x" text="monospace" fill="bg" as="h4">
      $ npm install -g cubejs-cli
    </nu-card>
    <nu-block color="dark-03" as="t2">
      or follow our <nu-link is-pink to="!https://cube.dev/docs/getting-started">Getting Started</nu-link> guide.
    </nu-block>
  </SiteBlock>
}
