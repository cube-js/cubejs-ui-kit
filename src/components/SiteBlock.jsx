import React from 'react';
import T from 'prop-types';
import Section from './Section.jsx';
import { attrs, insertHTML } from '../helpers';
import * as images from '../logos';

export default function SiteBlock(props) {
  const Heading = props.level ? `nu-h${props.level}` : 'nu-h2';

  return <Section
    padding="16x 0|||12x 0"
    text="center"
    items="center"
    fill={props.dark ? 'dark-02' : null}
    color={props.dark ? 'white' : null}
    border={props.dark ? 'top bottom outside #white.50' : null}
    {...attrs(props)}>
    <nu-attrs for="description" color={props.dark ? 'white 70%' : 'dark-03'} />
    {
      (props.image || props.heading || props.description) && <nu-flex
        flow="column"
        items={props.items || 'center'}
        width="min-content --heading-width (--max-content-width + (--content-padding * 2))"
        gap="2x">
        <nu-props heading-width="6sp||10sp|--content-width"/>
        {props.image &&
        <nu-svg
          id="logo"
          height="4.5x"
          width="18"
          padding="1x bottom"
          src={images[props.image] || images.main}
          label="Cube.js logo"
          filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
        }
        {props.heading && <Heading
          size={props.headingSize || (props.level ? null : 'h2')}
          {...insertHTML(props.heading)}/>}
        {props.description && <nu-description
          {...insertHTML(props.description)}/>}
      </nu-flex>
    }
    {props.children}
  </Section>;
}

SiteBlock.propTypes = {
  dark: T.bool,
  image: T.string,
  heading: T.string,
  description: T.string,
  level: T.oneOf([1, 2, 3, 4, 5]),
  headingSize: T.string,
};
