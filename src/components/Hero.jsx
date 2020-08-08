import React from 'react';
import SiteBlock from './SiteBlock.jsx';
import { attrs } from '../helpers';

export default function Hero(props) {
  return <SiteBlock
    image={props.image}
    heading={props.heading}
    description={props.description}
    level={1}
    headingSize={props.headingSize}
    {...attrs(props)}
  />;
}

Hero.propTypes = SiteBlock.propTypes;
