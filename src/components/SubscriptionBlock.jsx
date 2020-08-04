/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
import { insertHTML } from '../helpers';
import Subscription from '../services/subscription';

const HEADING = 'Sign up for Cube.js&nbsp;Releases and&nbsp;Updates';
const DESCRIPTION = 'Awesome product updates; no&nbsp;spam.';

export default function SubscriptionBlock(props) {
  const inputRef = createRef();
  const subscription = Subscription();

  let { email, error, loading } = subscription;

  function onSubmit(event) {
    const data = event.detail;

    if (data && data.email) {
      subscription.submit(data.email);
    } else {
      inputRef.current.focus();
    }
  }

  return <nu-section
    theme="special"
    fill="dark-02"
    padding="12x 4x|||8x 2x"
    box="y"
    color="white"
    border="top bottom outside #white.50">
    <nu-flex flow="column" items="center" gap text="center">
      <nu-h2 size="h2||h3|h4" {...insertHTML(props.heading || HEADING)} />
      <nu-description color="light-text" {...insertHTML(props.description || DESCRIPTION)} />
      <nu-spacer></nu-spacer>
      {
        !email && <nu-form onEventInput={onSubmit} display="flex" flow="row wrap" gap width="18 100% 40" text="left">
          <nu-input
            ref={inputRef}
            disabled={loading || null}
            id="email"
            placeholder="Email"
            grow="2"
            padding="1.5x 2x">
          </nu-input>
          <nu-btn
            action="submit"
            disabled={loading || null}
            special>
            Subscribe
          </nu-btn>
          <nu-block width="100%" color>
            <nu-check for="email" assert="email">Email is not valid</nu-check>
          </nu-block>
          {
            error && <nu-block>We are unable to subscribe your email. This may be due to an invalid email address. Please&nbsp;check and try again.</nu-block>
          }
        </nu-form>
      }
      {
        email && <nu-block radius padding="2x" border="1ow dashed" size="lg (2x + 1ow + 1bw)||md (2x + 1ow + 1bw)">
          <nu-strong>{email}</nu-strong> has been subscribed!
        </nu-block>
      }
    </nu-flex>
    {
      loading && <nu-progressbar value="100" place="bottom" width="100%"></nu-progressbar>
    }
  </nu-section>;
}
