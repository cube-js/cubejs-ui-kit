import React, { useState } from 'react';
import Button from './Button';
import { copyToClipboard } from '../helpers';
import T from "prop-types";

export default function CopyButton(props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await copyToClipboard(props.copy || '');
    await props.onCopy && props.onCopy();

    setCopied(true);
  }

  function onOut() {
    setCopied(false);
  }

  const { copy, ...buttonProps } = props;

  return <Button
    onTap={onCopy}
    onBlur={onOut}
    onMouseOut={onOut}
    width="min 8"
    {...buttonProps}>
    { copied ? 'Copied' : 'Copy' }
  </Button>
}

CopyButton.propTypes = {
  copy: T.string,
  onCopy: T.func,
};
