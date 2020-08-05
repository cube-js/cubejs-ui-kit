/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
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
    bold {...filterAttrs(props)}
    text="left" label="Subscription">
    <nu-flow
      column="2 / span 6||2 / span 5|span 2"
      text="left|||center" gap="0|||2x" size="t2" color="light-text"
      {...insertHTML(props.description)} />
    <nu-block column="span 4||span 5|span 2">
      {
        !email && <nu-form
          display="flex" width="||100%" flow="row||column" gap
          onEventInput={onSubmit}>
          <nu-input
            ref={inputRef}
            color="main-text :invalid[text]"
            disabled={loading || null}
            id="email"
            placeholder="Email"
            grow="1"
            padding="1.5x 2x">
          </nu-input>
          <nu-btn
            action="submit"
            disabled={loading || null}
            width="15x|auto"
            special
            is-big>
            {props.action || ACTION}
          </nu-btn>
          <nu-check place="right bottom 1.25x 6x||bottom .75x" for="email" assert="email">Email is
            not valid
          </nu-check>
          {
            error &&
            <nu-block width="100%">We are unable to subscribe your email. This may be due to an
              invalid email address. Please&nbsp;check and try again.</nu-block>
          }
        </nu-form>
      }
      {
        email && <nu-block radius padding="1x 2x" border="1ow dashed" as="t1">
          <nu-strong>{email}</nu-strong>&nbsp;has been signed up!
        </nu-block>
      }
    </nu-block>
    {
      loading && <nu-progressbar value="100" place="bottom" width="100%"></nu-progressbar>
    }
  </CardBlock>;
}
