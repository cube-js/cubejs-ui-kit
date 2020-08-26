import React from 'react';
import Grid from './Grid.jsx';

const NO_OUTLINE_STYLES = {
  outline: 'none !important',
};

function removeOutline(node) {
  if (node) {
    node.style.setProperty('outline', 'none', 'important');
  }
}

export default function GridLines() {
  return <nu-block
    place="fixed cover"
    interactive="no"
    z="front"
    show="^root n :grid[y]"
    ref={removeOutline}>
    <Grid content="stretch" height="100%" items="stretch" gap="0 --grid-gap" ref={removeOutline}>
      <nu-attrs for="block" fill="pink 10%"/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
      <nu-block ref={removeOutline}/>
    </Grid>
  </nu-block>;
}
