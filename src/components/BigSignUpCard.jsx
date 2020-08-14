/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
import T from 'prop-types';

import { attrs, insertHTML } from '../helpers';
import useSubscription from '../services/subscription';
import { HAS_BEEN_SIGNED_UP, UNABLE_TO_SUBSCRIBE } from '../messages';
import CardBlock from './CardBlock.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Heading from './Heading.jsx';

const ACTION = 'Sign Up';

export default function BigSignUpCard(props) {
  const inputRef = createRef();
  const subscription = useSubscription(props.postUrl, props.postData);

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
    padding="10x 0|||7.5x --content-padding 6x"
    text="center" label="Subscription"
    {...attrs(props)}>
    <nu-flex gap="4x" width="6sp||8sp|100%" items="center" flow="column">
      { props.heading && <Heading {...insertHTML(props.heading)} /> }
      { props.description && <nu-description
        {...insertHTML(props.description)} /> }
      {
        !email && <nu-form
          display="flex" flow="row|||column" gap
          width="100%"
          onEventInput={onSubmit} text="left">
          <Input
            ref={inputRef}
            color="main-text :invalid[text]"
            disabled={loading || null}
            id="email"
            placeholder="Email"
            grow="1"
            big>
          </Input>
          <Button
            action="submit"
            disabled={loading || null}
            special big
            width="2sp||3sp|100%">
            { props.action || ACTION }
          </Button>
          <nu-check place="bottom 1.25x 6x||bottom .75x" for="email" assert="email">Email is not valid</nu-check>
          {
            error && <nu-block width="100%">{UNABLE_TO_SUBSCRIBE}</nu-block>
          }
        </nu-form>
      }
      {
        email && <nu-block radius padding="1x 2x" border="1ow dashed" as="t1">
          <nu-strong>{email}</nu-strong>&nbsp;{HAS_BEEN_SIGNED_UP}
        </nu-block>
      }
    </nu-flex>
  </CardBlock>;
}

BigSignUpCard.propTypes = {
  postUrl: T.string,
  postData: T.object,
};
