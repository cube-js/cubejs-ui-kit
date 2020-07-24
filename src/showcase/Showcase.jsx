/** @jsx jsx */
import React, { useState } from 'react';
import jsx from 'jsx-native-events';
import SchemeSwitch from '../components/SchemeSwitch';
import SignUpBlock from '../components/SignUpBlock';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ImportSnippet from './ImportSnippet';

const HOVER_STYLES = {
  mark: '#special.12 :special[#special-text.20]',
  border: '1bw :clear[hidden] :special[#special-text.20]'
};
const PRESSED_STYLES = {
  mark: '#special.12 :special[#special-text.20]',
  border: '#special :special[1bw] :clear[1bw]',
};
const FOCUS_STYLES = {
  outline: 'y',
};
const DISABLED_STYLES = {
  disabled: '',
};

export default function Showcase() {
  return (<nu-flow id="showcase" gap="2x" padding="2x||1x">
    <nu-attrs for="code" radius="" overflow="auto no" inset=".5x" padding="1x 2x" fill="main-bg"/>

    <nu-pane content="space-between">
      <nu-h1>Cube.js UIKit Showcase</nu-h1>
      <nu-pane>
        <SchemeSwitch/>
      </nu-pane>
    </nu-pane>

    <nu-attrs for="example" gap="2x" columns="1pr 2pr||1fr" items="start stretch"></nu-attrs>
    <nu-attrs for="preview" padding="2x left" border="1ow left"></nu-attrs>

    <nu-card gap="2x">
      <nu-h2>Buttons</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic button</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn>Button</nu-btn>
<nu-btn is-red>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn>Button</nu-btn>
              <nu-btn {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-red>Button</nu-btn>
              <nu-btn is-red {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn is-red {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn is-red {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn is-red {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Special button</nu-h4>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn special>Button</nu-btn>
<nu-btn is-red special>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn special>Button</nu-btn>
              <nu-btn special {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn special {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn special {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn special {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn special is-red>Button</nu-btn>
              <nu-btn special is-red {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn special is-red {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn special is-red {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn special is-red {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h4>Clear button</nu-h4>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn clear>Button</nu-btn>
<nu-btn is-red clear>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn clear>Button</nu-btn>
              <nu-btn clear {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn clear {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn clear {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn clear {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn clear clear clear is-red>Button</nu-btn>
              <nu-btn clear clear is-red {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn clear is-red {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn clear clear is-red {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn clear is-red {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
      <nu-spacer></nu-spacer>
      <nu-h3>Big button</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-btn is-big>Button</nu-btn>
<nu-btn is-big is-red>Button</nu-btn>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-btn is-big special>Button</nu-btn>
              <nu-btn is-big special {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn is-big special {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn is-big special {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn is-big special {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-btn is-big is-red special>Button</nu-btn>
              <nu-btn is-big is-red special {...HOVER_STYLES}>Hover</nu-btn>
              <nu-btn is-big is-red special {...PRESSED_STYLES}>Pressed</nu-btn>
              <nu-btn is-big is-red special {...FOCUS_STYLES}>Focus</nu-btn>
              <nu-btn is-big is-red special {...DISABLED_STYLES}>Disabled</nu-btn>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Inputs</nu-h2>
      <nu-spacer></nu-spacer>
      <nu-h3>Basic input</nu-h3>
      <nu-grid as="example">
        <nu-code dangerouslySetInnerHTML={{
          __html: `<textarea>
<nu-input placeholder="Input"/>
<nu-input placeholder="Input" is-red/>
          </textarea>`,
        }}>
        </nu-code>
        <nu-block as="preview">
          <nu-flex gap="2x 1x" flow="column">
            <nu-flex flow="row wrap" gap>
              <nu-input placeholder="Input"/>
              <nu-input placeholder="Focus" outline="y"/>
              <nu-input disabled placeholder="Disabled"/>
            </nu-flex>
            <nu-flex flow="row wrap" gap>
              <nu-input is-red placeholder="Input"/>
              <nu-input is-red placeholder="Focus" outline="y"/>
              <nu-input is-red disabled placeholder="Disabled"/>
            </nu-flex>
          </nu-flex>
        </nu-block>
      </nu-grid>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: Topbar</nu-h2>

      <ImportSnippet name="Topbar" />

      <nu-block space="0 4x||0 (3x + 1bw)" fill shadow>
        <Topbar/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: SignUpBlock</nu-h2>

      <ImportSnippet name="SignUpBlock" />

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)" shadow>
        <SignUpBlock/>
      </nu-block>
    </nu-card>

    <nu-card gap="2x">
      <nu-h2>Block: Footer</nu-h2>

      <ImportSnippet name="Footer" />

      <nu-block space="0 (4x + 1bw)||0 (3x + 1bw)">
        <Footer/>
      </nu-block>
    </nu-card>
  </nu-flow>);
}
