import React from 'react';
import T from 'prop-types';
import Grid from './Grid.jsx';
import Section from './Section.jsx';
import Heading from './Heading.jsx';
import Link from './Link';
import BlockLink from './BlockLink';
import { attrs } from '../helpers';
import Icon from './Icon';

const COMPANY_LINKS = [
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Careers',
    link: '/careers',
  },
  {
    label: 'Terms of Use',
    link: '/terms-of-use',
  },
  {
    label: 'Privacy Policy',
    link: '/privacy-policy',
  },
];

const RESOURCES_LINKS = [
  {
    label: 'Getting Started',
    link: '!https://github.com/cube-js/cube.js#getting-started',
  },
  {
    label: 'Documentation',
    link: '/docs',
  },
  {
    label: 'Examples',
    link: '!https://github.com/cube-js/cube.js#examples',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
];

export default function Footer(props) {
  const columns = props.hideCompany ? '6sp 2sp 2sp||4sp 3sp 3sp|2sp' : '4sp 2sp 2sp 2sp||4sp 3sp 3sp|2sp';

  return <Section
    role="contentinfo"
    fill="dark-02"
    color="white"
    border="top bottom outside #white.50"
    {...attrs(props)}>

    <Grid width="10sp|||100%" columns={columns} padding="11x 0">
      <nu-attrs for="link" text="n nowrap" color="white 70% :hover[white]"></nu-attrs>
      <nu-attrs for="h5" text="b nowrap"></nu-attrs>

      <nu-flow
        opacity=".7" width="auto||100%" size="t2">
        <nu-block text="nowrap">Built with ♥️ <nu-el display="inline||block|inline">in San Francisco</nu-el></nu-block>
        <nu-block text="nowrap">2020 © Cube Dev, Inc.</nu-block>
      </nu-flow>

      <nu-flex gap=".5x" flow="column" items="start">
        <Heading level="5">Resources</Heading>
        <nu-spacer height=".5x" />
        {
          RESOURCES_LINKS.map(item => {
            return <Link key={item.label} to={item.link}>{item.label}</Link>
          })
        }
      </nu-flex>

      {
        !props.hideCompany && <nu-flex gap=".5x" flow="column" items="start">
          <Heading level="5">Company</Heading>
          <nu-spacer height=".5x" />
          {
            COMPANY_LINKS.map(item => {
              return <Link key={item.label} to={item.link}>{item.label}</Link>
            })
          }
        </nu-flex>
      }

      <nu-flow gap="2x" column={props.hideCompany ? null : '||2|1 / -1'}>
        <Heading level="5">Community</Heading>
        <nu-pane gap="2x">
          <nu-attrs
            for="blocklink"
            radius="round"
            padding=".25x"
            size="t1"
            color="white"
            transition="opacity"></nu-attrs>
          <BlockLink to="!https://slack.cube.dev/" label="Slack">
            <Icon name="slack"/>
          </BlockLink>
          <BlockLink to="!https://twitter.com/thecubejs" label="Twitter">
            <Icon name="twitter"/>
          </BlockLink>
          <BlockLink to="!https://github.com/cube-js/cube.js" label="Github">
            <Icon name="github"/>
          </BlockLink>
        </nu-pane>
      </nu-flow>
    </Grid>
  </Section>
}

Footer.propTypes = {
  hideCompany: T.bool,
};
