import React from 'react';
import SiteBlock from './SiteBlock';
import { attrs } from '../helpers';
import CopyButton from './CopyButton';
import Link from './Link';

export const INSTALL_COMMAND = 'npx cubejs-cli create hello-world';
export const START_TEXT = 'and follow our';
export const END_TEXT = 'guide.';
export const LINK_URL = '!https://cube.dev/docs/getting-started';
export const LINK_TEXT = 'Getting Started';

export default function GettingStarted(props) {
  return <SiteBlock
    id="getting-started"
    pink
    heading={props.heading || "Get started with Cube.js"}
    {...attrs(props)}>
    <nu-flex width="max --content-width" gap height="min 7x">
      <nu-card
        display="grid" padding="0 8x||0 2x" content="center start" width="max --content-width"
        text="monospace nowrap" fill="bg" as="h4" overflow="auto hidden" radius border="#pink-04">
        $ { props.command || INSTALL_COMMAND }
      </nu-card>
      <CopyButton big special copy={props.command || INSTALL_COMMAND} show="y|||n">
        Copy
      </CopyButton>
    </nu-flex>
    <nu-block color="dark-03" as="t2">
      {props.start || START_TEXT} <Link is-pink to={props.link || LINK_URL}>{props.text || LINK_TEXT}</Link> {props.end || END_TEXT}
    </nu-block>
  </SiteBlock>
}
