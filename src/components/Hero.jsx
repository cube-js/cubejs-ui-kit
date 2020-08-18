import React from 'react';
import SiteBlock from './SiteBlock.jsx';
import { attrs } from '../helpers';

export default function Hero(props) {
  return <SiteBlock
    badge={props.badge}
    wide={props.wide}
    githubBadge={props.githubBadge}
    image={props.image}
    bgImage={props.bgImage}
    heading={props.heading}
    description={props.description}
    level={1}
    headingSize={props.headingSize}
    {...attrs(props)}
  >
    {props.children}
  </SiteBlock>;
}

Hero.propTypes = SiteBlock.propTypes;
