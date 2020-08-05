/** @jsx jsx */
import React from 'react';
import jsx from 'jsx-native-events';
import Grid from './Grid.jsx';
import slackIcon from '../assets/slack.svg';
import twitterIcon from '../assets/twitter.svg';
import githubIcon from '../assets/github.svg';
import Section from './Section.jsx';

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
  return <Section
    fill="dark-02"
    color="white"
    border="top bottom outside #main-border">
    <Grid width="10sp|||100%" columns="4sp 2sp 2sp 2sp||4sp 3sp 3sp|2sp" padding="11x 0">
      <nu-attrs for="link" text="n nowrap" color="white 70% :hover[white]"></nu-attrs>
      <nu-attrs for="h5" text="b nowrap" size="md"></nu-attrs>

      <nu-flow
        opacity=".7" width="auto||100%" size="md lg">
        <nu-block text="nowrap">Built with ♥️ <nu-el display="inline||block|inline">in San Francisco</nu-el></nu-block>
        <nu-block text="nowrap">2020 © Cube Dev, Inc</nu-block>
      </nu-flow>

      <nu-flex gap=".5x" flow="column">
        <nu-h5>Resources</nu-h5>
        <nu-spacer height=".5x" />
        {
          RESOURCES_LINKS.map(item => {
            return <nu-link key={item.label} to={item.link}>{item.label}</nu-link>
          })
        }
      </nu-flex>

      <nu-flex gap=".5x" flow="column">
        <nu-h5>Community</nu-h5>
        <nu-spacer height=".5x" />
        {
          COMMUNITY_LINKS.map(item => {
            return <nu-link key={item.label} to={item.link}>{item.label}</nu-link>
          })
        }
      </nu-flex>

      <nu-flow gap="2x" column="||2|1 / -1">
        <nu-h5>Get in touch</nu-h5>
        <nu-pane gap="2x">
          <nu-attrs
            for="blocklink"
            radius="round"
            padding=".25x"
            size="t1"
            transition="opacity"></nu-attrs>
          <nu-blocklink to="!https://slack.cube.dev/">
            <nu-svg src={slackIcon}></nu-svg>
          </nu-blocklink>
          <nu-blocklink to="!https://twitter.com/thecubejs">
            <nu-svg src={twitterIcon}></nu-svg>
          </nu-blocklink>
          <nu-blocklink to="!https://github.com/cube-js/cube.js">
            <nu-svg src={githubIcon}></nu-svg>
          </nu-blocklink>
        </nu-pane>
      </nu-flow>
    </Grid>
  </Section>
}
