import React from 'react';
import { colors } from '../vars';

//   h1: [2.5, 3],
//   h2: [2, 2.5],
//   h3: [1.75, 2.5],
//   h4: [1.5, 2],
//   h5: [1.25, 2],
//   h6: [1, 1.5],
//   hero: [4, 5],

const { primary, secondary, minor } = colors;
const BTN_STYLES = {
  theme: 'primary tint :red[secondary tint]',
};

export default function Root(props) {
  return <nu-root
    responsive="80rem|60rem|40rem"
    fill="subtle"
    height="min 100vh"
    text="n">
    <nu-theme hue={primary.hue} saturation={primary.saturation}></nu-theme>
    <nu-theme name="primary" hue={primary.hue} saturation={primary.saturation} mod="tint"></nu-theme>
    <nu-theme name="secondary" hue={secondary.hue} saturation={secondary.saturation} mod="tint"></nu-theme>
    <nu-theme name="minor" hue={minor.hue} saturation={minor.saturation} mod="special strong"></nu-theme>
    <nu-props
      radius=".5x"
      font="CeraPro, 'Avenir Next', 'Avenir', Helvetica, Ubuntu, 'DejaVu Sans', Arial, sans-serif"
      bold-bg-color={`hue(${minor.hue} ${minor.saturation} 68 special)`}
      bold-text-color={`hue(${minor.hue} 0 0 70% special)`}
      hero-font-size="2.5rem||2rem"
      hero-line-height="3.5rem||3rem"
      h1-font-size="2rem||1.75rem"
      h1-line-height="2.5rem"
      h2-font-size="1.75rem||1.5rem"
      h2-line-height="2.5rem||2rem"
      h3-font-size="1.5rem||1.375rem"
      h3-line-height="2rem"
      h4-font-size="1.25rem||1.25rem"
      h4-line-height="2rem"
      h5-font-size="1.125rem"
      h5-line-height="1.5rem"
      h6-font-size="1rem"
      h6-line-height="1.5rem"
      content-padding="10x||2x"
      placeholder-color={`hue(${colors.primary.hue} 25 70 40})`}
      />
    <nu-attrs for="description" color="text 80%"></nu-attrs>
    <nu-attrs for="btn" {...BTN_STYLES}></nu-attrs>
    { props.children }
  </nu-root>;
}
