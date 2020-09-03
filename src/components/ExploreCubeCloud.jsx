import React from 'react';
import CardBlock from './CardBlock.jsx';
import Button from './Button.jsx';
import { cubeCloud } from '../logos';
import { attrs } from '../helpers';
import Image from './Image';

export default function ExploreCubeCloud(props) {
  return <CardBlock text="left" padding="2x 0|2x --grid-gap|4x 2x" {...attrs(props)}>
    <nu-pane gap="--column-width|||2x" width="10sp|||100%" flow="row|||column">
      <nu-attrs for="block"/>
      <nu-block>
        <Image height="36rp" src={cubeCloud}/>
      </nu-block>
      <nu-line orient="v" fill="light" height="15x" show="y|||n"/>
      <nu-pane grow="1|||initial" flow="row||column" width="auto|||100%" gap="2x">
        <nu-block color="dark-03" as="t2" grow="1" text="left||center">
          A managed deployment platform by&nbsp;the&nbsp;creators&nbsp;of&nbsp;Cube.js
        </nu-block>
        <Button special>Explore Cube Cloud</Button>
      </nu-pane>
    </nu-pane>
  </CardBlock>;
}
