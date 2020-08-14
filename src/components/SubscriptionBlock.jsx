/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
import T from 'prop-types';

import { HAS_BEEN_SUBSCRIBED, UNABLE_TO_SUBSCRIBE } from '../messages';
import useSubscription from '../services/subscription';
import SiteBlock from './SiteBlock.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { insertHTML } from '../helpers';

export const HEADING = 'Sign up for Cube.js&nbsp;Releases and&nbsp;Updates';
export const DESCRIPTION = 'Awesome product updates; no&nbsp;spam.';

export default function SubscriptionBlock(props) {
  const inputRef = createRef();
  const subscription = useSubscription();

  let { email, error, loading } = subscription;

  function onSubmit(event) {
    const data = event.detail;

    if (data && data.email) {
      subscription.submit(data.email);
    } else {
      inputRef.current.focus();
    }
  }

  return <SiteBlock
    padding="12x 4x|||8x 2x"
    dark={props.dark}
    heading={HEADING}
    description={DESCRIPTION}>
    <nu-block width="6sp 100%||10sp 100%|100%">
      {
        !email &&
        <nu-form onEventInput={onSubmit} display="flex" flow="row wrap|||column" width="100%" gap
                 text="left">
          <Input
            ref={inputRef}
            disabled={loading || null}
            id="email"
            placeholder="Email"
            grow="1"
            big>
          </Input>
          <Button
            width="2sp||3sp|100%"
            action="submit"
            disabled={loading || null}
            special
            big>
            Subscribe
          </Button>
          <nu-block width="100%" color>
            <nu-check for="email" assert="email">Email is not valid</nu-check>
          </nu-block>
          {
            error &&
            <nu-block {...insertHTML(UNABLE_TO_SUBSCRIBE)}></nu-block>
          }
        </nu-form>
      }
      {
        email && <nu-block radius padding="2x" border="1ow dashed" as="t1">
          <nu-strong>{email}</nu-strong>
          &nbsp;{ HAS_BEEN_SUBSCRIBED }
        </nu-block>
      }
    </nu-block>
    {
      loading && <nu-progressbar value="100" place="bottom" width="100%"></nu-progressbar>
    }
  </SiteBlock>;
}

SubscriptionBlock.propTypes = {
  postUrl: T.string,
  postData: T.object,
};
