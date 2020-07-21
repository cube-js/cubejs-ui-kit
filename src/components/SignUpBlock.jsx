/** @jsx jsx */
import React, { createRef, useState } from 'react';
import jsx from 'jsx-native-events';
import fetch from '../utils/fetch';

const subscribeUrl = 'https://hooks.zapier.com/hooks/catch/2073111/lgugyb/';

export default function SignUpBlock() {
  const inputRef = createRef();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  function onSubmit(event) {
    const data = event.detail;

    if (data && data.email) {
      setLoading(true);

      fetch.post(subscribeUrl, { email })
        .then(() => {
          setEmail(data.email);
        }, () => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      inputRef.current.focus();
    }
  }

  return <nu-block theme="aside" fill="bg" padding="12x 4x|||8x 2x" box="y" border="top bottom outside #main-border">
    <nu-flex flow="column" items="center" gap text="center">
      <nu-h2 size="h2||h4|h5">Sign up for Cube.js&nbsp;Releases and&nbsp;Updates</nu-h2>
      <nu-description>Awesome product updates; no&nbsp;spam.</nu-description>
      <nu-spacer></nu-spacer>
      {
        !email && <nu-form onEventInput={onSubmit} display="flex" flow="row wrap" gap width="20 100% 40" text="left">
          <nu-input ref={inputRef} disabled={loading || null} id="email" placeholder="Email" special theme="primary special :invalid[secondary special]" border="1bw :invalid[#bg]" grow="2" padding="1.5x 2x"></nu-input>
          <nu-btn action="submit" disabled={loading || null} special theme="primary" grow="1" padding="1.5x 2x">Subscribe</nu-btn>
          <nu-block width="100%" color>
            <nu-check for="email" assert="email">Email is not valid</nu-check>
          </nu-block>
          {
            error && <nu-block>We are unable to subscribe your email. This may be due to an invalid email address. Please&nbsp;check and try again.</nu-block>
          }
        </nu-form>
      }
      {
        email && <nu-card border="1ow dashed" size="lg (2x + 1ow + 1bw)||md (2x + 1ow + 1bw)">
          <nu-strong>{email}</nu-strong> has been subscribed!
        </nu-card>
      }
    </nu-flex>
    {
      loading && <nu-progressbar value="100" place="bottom" width="100%"></nu-progressbar>
    }
  </nu-block>;
}
