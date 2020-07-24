/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';

const COMMUNITY_LINKS = [
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
  return <nu-section
    theme="special"
    fill="minorbg"
    padding="11x 11x|11x 11x|11x 4x|6x 2x"
    border="top bottom outside #main-border">
    <nu-grid
      gap="4x 12x||4x 10x|4x 8x"
      flow="row"
      width="max 80||auto|max 24"
      place="space-around"
      columns="1fr auto auto auto||auto auto 1fr|auto auto"
      items="start|||start center"
      content="stretch||stretch">
      <nu-attrs for="link" text="n nowrap" color="minor :hover[text]"></nu-attrs>
      <nu-attrs for="h5" text="b nowrap" size="md"></nu-attrs>

      <nu-flow
        opacity=".7" width="auto||100%" size="md lg"
        row="||2|4" column="||3|1 / -1" place="||stretch|center" text="||right|center">
        <nu-block text="nowrap">Built with ♥️ in San Francisco</nu-block>
        <nu-block text="nowrap">2020 © Cube Dev, Inc</nu-block>
      </nu-flow>

      <nu-flex gap flow="column" items="start" row="||1 / 3" column="||1">
        <nu-h5>Community</nu-h5>
        {
          COMMUNITY_LINKS.map(item => {
            return <nu-link key={item.label} to={item.link}>{item.label}</nu-link>
          })
        }
      </nu-flex>

      <nu-flex gap flow="column" items="start" row="||1 / 3" column="||2">
        <nu-h5>Resources</nu-h5>
        {
          RESOURCES_LINKS.map(item => {
            return <nu-link key={item.label} to={item.link}>{item.label}</nu-link>
          })
        }
      </nu-flex>

      <nu-flow gap row="||1|3" column="||3|1 / -1" place="||start end|center">
        <nu-h5>Get in touch</nu-h5>
        <nu-pane gap content="||flex-end|center">
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
  </nu-section>
}
