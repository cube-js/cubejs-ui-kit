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
  const subscription = Subscription(props.url);

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
    bold {...filterAttrs(props)}
    width="initial (100% - 8x) 76||min-content max-content (100% - 4x)"
    text="left">
    <nu-grid
      columns="1pr auto||auto" gap="4x" label="Subscription" content="space-between||center">
      <nu-block
        {...insertHTML(props.description)} />
      <nu-block>
        {
          !email && <nu-form
            onEventInput={onSubmit} gap="0">
            <nu-pane width="||100%" flow="row|||column">
              <nu-input
                ref={inputRef}
                color="main-text :invalid[text]"
                disabled={loading || null}
                id="email"
                placeholder="Email"
                theme="primary :invalid[secondary]"
                border="1bw :invalid[#bg]"
                grow="initial||1"
                width="min 15|||100%"
                padding="1.5x 2x">
                <nu-props placeholder-color={`hue(${colors.primary.hue} 25 70 40 special})`}></nu-props>
              </nu-input>
              <nu-btn
                action="submit"
                disabled={loading || null}
                special
                theme="secondary"
                width="min 8|||100%"
                padding="1.5x 2x">
                { props.action || ACTION }
              </nu-btn>
            </nu-pane>
            <nu-check place="right bottom 1.25x 6x||bottom .75x" for="email" assert="email">Email is not valid</nu-check>
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
    </nu-grid>
    {
      loading && <nu-progressbar value="100" place="bottom" width="100%"></nu-progressbar>
    }
  </CardBlock>;
}
