import React from 'react';
import { colors } from '../vars';

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
      minorbg-color={`hue(${minor.hue} ${minor.saturation} 68 special)`}
      minor-color={`hue(${minor.hue} 0 0 70% special)`}/>
    <nu-attrs for="btn" {...BTN_STYLES}></nu-attrs>
    { props.children }
  </nu-root>;
}
