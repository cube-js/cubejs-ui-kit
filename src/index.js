import React from 'react';
import { render } from 'react-dom';
import { ready } from './core';
import Showcase from './showcase';

ready.then(() => {
  render(<Showcase/>, document.getElementById('showcase'));
});
