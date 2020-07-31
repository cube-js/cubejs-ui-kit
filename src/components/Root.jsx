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

export default function Root(props) {
  return <nu-root
    style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    responsive="80rem|60rem|40rem"
    transition="fill"
    fill="light"
    height="min 100vh"
    text="n">
    <nu-props
      radius=".5x"
      font="CeraPro, 'Avenir Next', 'Avenir', Helvetica, Ubuntu, 'DejaVu Sans', Arial, sans-serif"
      bold-bg-color={`hue(${minor.hue} ${minor.saturation} 68 special)`}
      bold-text-color={`hue(${minor.hue} 0 0 70% special)`}
      disabled-opacity=".6"

      dark-01-color="#141446"
      dark-02-color="#43436B"
      dark-03-color="#727290"
      dark-04-color="#A1A1B5"
      dark-05-color="#D5D5E2"
      light-color="#F3F3FB"

      input-border-color="#D5D5E2"

      text-color="#141446"
      text-soft-color="#141446"

      purple-color="#7A77FF"
      purple-hover-color="#6B4CF6"
      purple-outline-color="color(purple 30%)"

      outline-color="--purple-outline-color"

      pink-color="#FF6492"
      pink-hover-color="#FA326E"
      pink-outline-color="color(pink 30%)"

      special-color="color(pink)"
      special-bg-color="color(pink)"
      special-text-color="white"
      border-color="color(pink 60%)"

      hero-font-size="2.5rem||2rem"
      hero-line-height="3.5rem||3rem"
      h1-font-size="42rp||32rp"
      h1-line-height="54rp||44rp"
      h2-font-size="32rp||26rp"
      h2-line-height="44rp||36rp"
      h3-font-size="26rp||22rp"
      h3-line-height="36rp||30rp"
      h4-font-size="20rp"
      h4-line-height="28rp"
      h5-font-size="16rp"
      h5-line-height="28rp"
      t1-font-size="18rp"
      t1-line-height="28rp"
      t2-font-size="16rp"
      t2-line-height="28rp"
      c1-font-size="16rp"
      c1-line-height="22rp"
      c2-font-size="14rp"
      c2-line-height="22rp"
      p1-font-size="18rp"
      p1-line-height="32rp"

      content-padding="10x||2x"
      placeholder-color="--dark-02-color"
      />
    <nu-attrs for="description" color="dark-03" size="lg||md"></nu-attrs>
    { props.children }
  </nu-root>;
}
