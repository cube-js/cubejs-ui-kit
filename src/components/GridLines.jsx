import React from 'react';
import Grid from './Grid.jsx';

export default function GridLines() {
  return <nu-block
    place="fixed cover"
    interactive="no"
    z="front"
    show="^root n :grid[y]">
    <Grid content="stretch" height="100%" items="stretch" gap="0 --grid-gap">
      <nu-attrs for="block" fill="pink 10%"/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
      <nu-block/>
    </Grid>
  </nu-block>;
}
