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
      height="3.5"
      width="18"
      src={images[props.logo] || logo}
      label="Cube.js logo"
      filter="drop-shadow(0 1px 1px rgba(255, 255, 255, .2))"/>
    <nu-spacer/>
    <nu-h1
      size="h2||h3"
      {...insertHTML(props.heading)}></nu-h1>
    <nu-description
      size="lg||md"
      {...insertHTML(props.description)}></nu-description>
    {props.children}
  </Section>;
}
