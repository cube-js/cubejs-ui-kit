import React from 'react';

export default function Root(props) {
  return <nu-root
    responsive="80rem|60rem|40rem"
    fill="bg"
    height="min 100vh"
    text="n">
    <nu-theme hue="269" saturation="90"></nu-theme>
    <nu-theme name="primary" hue="269" saturation="90" mod="tint"></nu-theme>
    <nu-theme name="secondary" hue="359" saturation="84" mod="tint"></nu-theme>
    <nu-theme name="aside" hue="269" saturation="25" mod="strong special"></nu-theme>
    <nu-props
      radius=".5x"
      font="CeraPro, 'Avenir Next', 'Avenir', Helvetica, Ubuntu, 'DejaVu Sans', Arial, sans-serif"/>
    <nu-attrs for="btn" theme="primary tint :red[secondary tint]" text="n nowrap"></nu-attrs>
    { props.children }
  </nu-root>;
}
