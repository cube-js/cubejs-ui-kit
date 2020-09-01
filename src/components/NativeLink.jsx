import React from 'react';
import T from 'prop-types';

export default function NativeLink({ to }) {
  const newTab = to && to.startsWith('!');
  const href = to && to.slice(newTab ? 1 : 0);

  return href ? <a href={href}
    target={newTab ? '_blank' : null}
    aria-hidden="true" tabIndex="-1" role="none"/> : undefined;
}

NativeLink.propTypes = {
  to: T.string.isRequired,
};
