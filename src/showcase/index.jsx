/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import SchemeSwitch from '../components/SchemeSwitch';
import SignUpBlock from '../components/SignUpBlock';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

export default function Showcase() {
  return (<nu-flow id="showcase" gap="2x" padding="2x||1x">
    <nu-pane content="space-between">
      <nu-h1>Cube.js UIKit Showcase</nu-h1>
      <nu-pane>
        <SchemeSwitch/>
      </nu-pane>
    </nu-pane>

    <nu-attrs for="preview" gap="2x" columns="1pr 2pr||1fr" items="start stretch"></nu-attrs>

    <nu-card gap="2x">
      <nu-h2>Buttons</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic button</nu-h3>
      <nu-grid as="preview">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
            <nu-btn>Button</nu-btn>
            <nu-btn is-red>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block padding="2x left" border="1sw left">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn>Button</nu-btn>
              <nu-btn mark="y">Hover</nu-btn>
              <nu-btn inset="#shadow.50">Pressed</nu-btn>
              <nu-btn inset>Toggled</nu-btn>
              <nu-btn outline="y">Focus</nu-btn>
              <nu-btn disabled>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-red>Button</nu-btn>
              <nu-btn is-red mark="y">Hover</nu-btn>
              <nu-btn is-red inset="#shadow.50">Pressed</nu-btn>
              <nu-btn is-red inset>Toggled</nu-btn>
              <nu-btn is-red outline="y">Focus</nu-btn>
              <nu-btn is-red disabled>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Special button</nu-h4>
      <nu-grid as="preview">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
            <nu-btn special>Button</nu-btn>
            <nu-btn is-red special>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block padding="2x left" border="1sw left">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn special>Button</nu-btn>
              <nu-btn special mark="y">Hover</nu-btn>
              <nu-btn special inset="#special-shadow.50">Pressed</nu-btn>
              <nu-btn special inset>Toggled</nu-btn>
              <nu-btn special outline="y">Focus</nu-btn>
              <nu-btn special disabled>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-red special>Button</nu-btn>
              <nu-btn is-red special mark="y">Hover</nu-btn>
              <nu-btn is-red special inset="#special-shadow.50">Pressed</nu-btn>
              <nu-btn is-red special inset>Toggled</nu-btn>
              <nu-btn is-red special outline="y">Focus</nu-btn>
              <nu-btn is-red special disabled>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Clear button</nu-h4>
      <nu-grid as="preview">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
            <nu-btn clear>Button</nu-btn>
            <nu-btn is-red clear>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block padding="2x left" border="1sw left">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn clear>Button</nu-btn>
              <nu-btn clear mark="y">Hover</nu-btn>
              <nu-btn clear inset="#shadow.50">Pressed</nu-btn>
              <nu-btn clear inset>Toggled</nu-btn>
              <nu-btn clear outline="y">Focus</nu-btn>
              <nu-btn clear disabled>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-red clear>Button</nu-btn>
              <nu-btn is-red clear mark="y">Hover</nu-btn>
              <nu-btn is-red clear inset="#shadow.50">Pressed</nu-btn>
              <nu-btn is-red clear inset>Toggled</nu-btn>
              <nu-btn is-red clear outline="y">Focus</nu-btn>
              <nu-btn is-red clear disabled>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Top navigation bar</nu-h2>

      <nu-block space="0 4x||0 (3x + 1bw)" fill shadow>
        <Topbar/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Signup block</nu-h2>

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)" shadow>
        <SignUpBlock/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x" shadow>
      <nu-h2>Footer</nu-h2>

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)">
        <Footer/>
      </nu-block>
    </nu-card>
  </nu-flow>);
}
