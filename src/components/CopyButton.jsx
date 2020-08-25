import React, { useState } from 'react';
import Button from './Button';
import { copyToClipboard } from '../helpers';

export default function CopyButton(props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await copyToClipboard(props.copy || '');

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
