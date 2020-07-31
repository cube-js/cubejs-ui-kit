/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
import { colors } from '../vars';
import { filterAttrs, insertHTML } from '../helpers';
import CardBlock from './CardBlock.jsx';
import Subscription from '../services/subscription';

const ACTION = 'Sign Up';

export default function SmallSignUpCard(props) {
  const inputRef = createRef();
  const subscription = Subscription(props.postUrl, props.postData);

  let { email, error, loading } = subscription;

  function onSubmit(event) {
    const data = event.detail;

    if (data && data.email) {
      subscription.submit(data.email);
    } else {
      inputRef.current.focus();
    }
  }

  return <CardBlock
    {...filterAttrs(props)}
    width="initial (100% - 8x) 76||min-content max-content (100% - 4x)"
    text="center">
    <nu-flex
      flow="column" gap="4x" label="Subscription" items="center" width="max 40" place="space-around">
      { props.heading && <nu-h2 {...insertHTML(props.heading)} /> }
      { props.description && <nu-description
        {...insertHTML(props.description)} /> }
      <nu-block width="|||initial 100% 20">
        {
          !email && <nu-form
            onEventInput={onSubmit} gap="0" text="left">
            <nu-flex flow="row|||column" gap size="lg">
              <nu-input
                ref={inputRef}
                color="main-text :invalid[text]"
                disabled={loading || null}
                id="email"
                placeholder="Email"
                theme="main :invalid[secondary]"
                border="1bw :invalid[bg]"
                grow="initial||1"
                width="min 20|||100%"
                padding="1.5x 2x">
              </nu-input>
              <nu-btn
                action="submit"
                disabled={loading || null}
                special
                theme="secondary"
                width="min 12|||100%"
                padding="1.5x 2x">
                { props.action || ACTION }
              </nu-btn>
            </nu-flex>
            <nu-check place="bottom 1.25x 6x||bottom .75x" for="email" assert="email">Email is not valid</nu-check>
            {
              error && <nu-block width="100%">We are unable to subscribe your email. This may be due to an invalid email address. Please&nbsp;check and try again.</nu-block>
            }
          </nu-form>
        }
        {
          email && <nu-block radius padding="1x 2x" border="1ow dashed" size="lg||md">
            <nu-strong>{email}</nu-strong> has been signed up!
          </nu-block>
        }
      </nu-block>
    </nu-flex>
    {
      loading && <nu-progressbar value="100" place="bottom" width="100%"></nu-progressbar>
    }
  </CardBlock>;
}
