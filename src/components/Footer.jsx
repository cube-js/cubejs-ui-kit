/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';

const COMMINITY_LINKS = [
  {
    label: 'Slack us!',
    link: '!https://slack.cube.dev/',
  },
  {
    label: 'Github issues',
    link: '!https://github.com/cube-js/cube.js/issues',
  },
  {
    label: 'Email',
    link: 'mailto:info@cube.dev',
  },
];

const RESOURCES_LINKS = [
  {
    label: 'Github',
    link: '!https://github.com/cube-js/cube.js',
  },
  {
    label: 'Docs',
    link: 'https://cube.dev/docs',
  },
  {
    label: 'Examples',
    link: '!https://github.com/cube-js/cube.js#examples',
  },
  {
    label: 'Community',
    link: 'https://slack.cube.dev/',
  },
  {
    label: 'Blog',
    link: 'https://cube.dev/blog',
  },
];

export default function Footer() {
  return <nu-block theme="aside" fill="bg" padding="8x 4x|||6x 2x" space="0 (4x + 1bw)||0 (3x + 1bw)" shadow>
    <nu-grid gap="4x||4x 2x" width="max 80" place="space-around" items="start|||start center" columns="1fr 12 12 auto||1pr 1pr" content="stretch|||center">
      <nu-attrs for="link" text="normal" color="text 80% :hover[text]"></nu-attrs>
      <nu-attrs for="h5" text="nowrap"></nu-attrs>

      <nu-flow
        text="nowrap" color="dimgrey" width="auto||100%" size="md lg"
        row="||2|3" column="|||1 / -1" place="|||center" text="|||center">
        <nu-block>Built with ♥️ in San Francisco</nu-block>
        <nu-block>2020 © Cube Dev, Inc</nu-block>
      </nu-flow>

      <nu-flex gap flow="column" items="start">
        <nu-h5>Community</nu-h5>
        {
          COMMINITY_LINKS.map(item => {
            return <nu-link key={item.label} to={item.link}>{item.label}</nu-link>
          })
        }
      </nu-flex>

      <nu-flex gap flow="column" items="start">
        <nu-h5>Resources</nu-h5>
        {
          RESOURCES_LINKS.map(item => {
            return <nu-link key={item.label} to={item.link}>{item.label}</nu-link>
          })
        }
      </nu-flex>

      <nu-flow gap row="||2|4" column="||2|1 / -1" place="|||center">
        <nu-h5>Get in touch</nu-h5>
        <nu-pane gap content="|||center">
          <nu-attrs for="blocklink" radius="round" padding=".25x .5x" size="lg"></nu-attrs>
          <nu-blocklink to="!https://twitter.com/thecubejs">
            <nu-icon name="twitter"></nu-icon>
          </nu-blocklink>
          <nu-blocklink to="!https://github.com/cube-js/cube.js">
            <nu-icon name="github"></nu-icon>
          </nu-blocklink>
        </nu-pane>
      </nu-flow>
    </nu-grid>
  </nu-block>
}
