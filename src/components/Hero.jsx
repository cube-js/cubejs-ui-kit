import React from 'react';
import SiteBlock from './SiteBlock.jsx';

export default function Hero(props) {
  return <SiteBlock
    level={1}
    {...props}
  >
    {props.children}
  </SiteBlock>;
}

Hero.propTypes = SiteBlock.propTypes;
