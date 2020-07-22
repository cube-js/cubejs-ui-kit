import React from 'react';
import { render } from 'react-dom';
import { ready } from './core';
import Showcase from './showcase';
import Root from './components/Root.jsx';
import 'core.css';

ready.then(() => {
  render(<Root>
    <Showcase/>
  </Root>, document.getElementById('app'));
});
