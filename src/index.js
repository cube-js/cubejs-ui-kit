import './core.css';
import React from 'react';
import { render } from 'react-dom';
import UIKit from './core';
import Showcase from './showcase';
import Root from './components/Root.jsx';

UIKit.init({ scheme: 'auto' }).then(() => {
  render(<Root>
    <nu-block>
      <Showcase/>
    </nu-block>
  </Root>, document.getElementById('app'));
});
