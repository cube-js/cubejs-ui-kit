import './core.css';
import React from 'react';
import { render } from 'react-dom';
import UIKit from './core';
import Showcase from './showcase/Showcase';
import Root from './components/Root.jsx';

UIKit.init({ scheme: 'light' }).then(() => {
  render(<Root>
    <nu-block>
      <Showcase/>
    </nu-block>
  </Root>, document.getElementById('app'));
});
