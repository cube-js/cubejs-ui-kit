import React from 'react';
import { attrs } from '../helpers';

export default function Root(props) {
  return <nu-root
    style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
    responsive="100rem|61.25rem|40rem"
    transition="fill"
    fill={props.fill || 'light'}
    height="min 100vh"
    text="n"
    size="t2"
    {...attrs(props)}>
    <nu-props
      radius=".5x"
      font="CeraPro"
      disabled-opacity=".6"
      max-content-width="100rem - (--content-padding * 2)"
      grid-gap="3x"
      content-padding="6x||3x"
      column-width="((--max-content-width - (--grid-gap * 11)) / 12)|((100vw - (--content-padding * 2) - (--grid-gap * 11)) / 12)||((100vw - (--content-padding * 2) - --grid-gap) / 2)"
      content-width="12sp|||2sp"

      dark-01-color="#141446"
      dark-02-color="#43436B"
      dark-03-color="#727290"
      dark-04-color="#A1A1B5"
      dark-05-color="#D5D5E2"
      light-color="#F3F3FB"

      purple-hover-color="#6B4CF6"
      purple-01-color="#7A77FF"
      purple-02-color="#9592FF"
      purple-03-color="#AFADFF"
      purple-04-color="#CAC9FF"
      light-purple-color="color(purple-04 30%)"

      pink-hover-color="#FA326E"
      pink-01-color="#FF6492"
      pink-02-color="#FF83A8"
      pink-03-color="#FFA2BE"
      pink-04-color="#FFC1D3"
      light-pink-color="#FFF2F6"

      input-border-color="#D5D5E2"

      text-color="color(dark-01)"
      text-soft-color="color(dark-01)"
      light-text-color="rgba(255, 255, 255, .7)"

      purple-color="color(purple-01)"
      purple-outline-color="color(purple 30%)"

      outline-color="--purple-outline-color"

      pink-color="color(pink-01)"
      pink-outline-color="color(pink 30%)"

      special-color="color(pink)"
      special-bg-color="color(pink)"
      special-text-color="white"

      border-color="color(dark-05)"

      h1-font-size="42rp|||32rp"
      h1-line-height="54rp|||44rp"
      h2-font-size="32rp|||26rp"
      h2-line-height="44rp|||36rp"
      h3-font-size="26rp|||22rp"
      h3-line-height="36rp|||30rp"
      h4-font-size="18rp"
      h4-line-height="30rp"
      h5-font-size="16rp"
      h5-line-height="26rp"
      h6-font-size="14rp"
      h6-line-height="26rp"
      t1-font-size="18rp"
      t1-line-height="30rp"
      t2-font-size="16rp"
      t2-line-height="26rp"
      t3-font-size="14rp"
      t3-line-height="24rp"
      c1-font-size="16rp"
      c1-line-height="22rp"
      c2-font-size="14rp"
      c2-line-height="22rp"
      p1-font-size="18rp"
      p1-line-height="32rp"

      placeholder-color="color(dark-02 40%)"
    />

    { props.children }
  </nu-root>;
}
