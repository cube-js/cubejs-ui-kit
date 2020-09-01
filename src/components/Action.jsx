/** @jsx jsx */
import React from 'react';
import T from 'prop-types';
import jsx from 'jsx-native-events';
import NativeLink from './NativeLink';

const ROLE_MAP = {
  'nu-btn': 'button',
  'nu-link': 'link',
  'nu-cardbtn': 'button',
};

export default function Action(props) {
  const { tag, big, purple, pink, onTap, onInput, to, ...otherProps } = props;
  const Tag = tag || 'nu-action';

  return <Tag
    role={ROLE_MAP[tag] || 'button'}
    to={to}
    is-big={big || null}
    is-purple={purple || null}
    is-pink={pink || null}
    onEventTap={onTap}
    onEventInput={(event) => onInput && onInput(event.detail)}
    {...otherProps}>
    {props.children}
    { NativeLink({ to }) }
  </Tag>
}

Action.propTypes = {
  onTap: T.func,
  big: T.bool,
  purple: T.bool,
  to: T.string,
};
