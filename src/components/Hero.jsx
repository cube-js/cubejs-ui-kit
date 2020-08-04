import React from 'react';
import Section from './Section.jsx';
import { filterAttrs, insertHTML } from '../helpers';
import * as images from '../images';

export default function Hero(props) {
  return <Section
    padding="16x 2x"
    display="flex"
    flow="column"
    text="center"
    items="center"
    width="max 44"
    color="text-soft"
    {...filterAttrs(props)}>
    <nu-svg
      id="logo"
      height="4.5x"
      width="18"
      padding="1x bottom"
      src={images[props.logo] || images.logo}
      label="Cube.js logo"
      filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
    <nu-h1
      size="h2"
      {...insertHTML(props.heading)}></nu-h1>
    <nu-description
      {...insertHTML(props.description)}></nu-description>
    {props.children}
  </Section>;
}
