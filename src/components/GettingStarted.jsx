import React from 'react';
import SiteBlock from './SiteBlock';
import { attrs } from '../helpers';
import CopyButton from './CopyButton';

export const INSTALL_COMMAND = 'npx cubejs-cli create hello-world -d postgres';

export default function GettingStarted(props) {
  return <SiteBlock
    id="getting-started"
    pink
    heading="Get started with Cube.js"
    {...attrs(props)}>
    <nu-pane width="max --content-width">
      <nu-card padding="2x 8x||2x" text="monospace nowrap" fill="bg" as="h4" overflow="auto hidden" radius border="#pink-04">
        $ { props.command || INSTALL_COMMAND }
      </nu-card>
      <CopyButton big special>
        Copy
      </CopyButton>
    </nu-pane>
    <nu-block color="dark-03" as="t2">
      and follow our <nu-link is-pink to="!https://cube.dev/docs/getting-started">Getting Started</nu-link> guide.
    </nu-block>
  </SiteBlock>
}
