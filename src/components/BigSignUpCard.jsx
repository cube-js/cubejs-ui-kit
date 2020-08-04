/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
import { filterAttrs, insertHTML, spanWidth } from '../helpers';
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
    text="center" label="Subscription">
    <nu-flow gap="4x" columns="repeat(8, 1pr)|||1pr" column="4 / -4||3 / -3|1 / -1" padding="0|||0 --grid-gap">
      { props.heading && <nu-h2 {...insertHTML(props.heading)} /> }
      { props.description && <nu-description
        {...insertHTML(props.description)} /> }
      {
        !email && <nu-form display="flex" flow="row|||column" gap
          onEventInput={onSubmit} text="left" size="lg">
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
            special
            is-big
            width="2sp||3sp|100%">
            { props.action || ACTION }
          </nu-btn>
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
    </nu-flow>
  </CardBlock>;
}
