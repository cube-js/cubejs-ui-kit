/** @jsx jsx */
import React, { createRef } from 'react';
import jsx from 'jsx-native-events';
import T from 'prop-types';

import { THANK_YOU, UNABLE_TO_SUBSCRIBE, VALIDATION_ERROR_EMAIL } from '../messages';
import useSubscription from '../services/subscription';
import SiteBlock from './SiteBlock.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { attrs, insertText } from '../helpers';

export default function SubscriptionBlock(props) {
  const inputRef = createRef();
  const subscription = useSubscription();

  let { email, error, loading } = subscription;

  function onSubmit(event) {
    const email = event.detail && event.detail.email;

    if (email) {
      subscription.submit(email)
        .then(() => {
          props.onSuccess && props.onSuccess(email);
        });
    } else {
      inputRef.current.focus();
    }
  }

  return <SiteBlock
    padding="12x 4x|||8x 2x"
    special={props.special}
    heading={props.heading}
    description={props.description}
    headingWidth="--content-width"
    {...attrs(props)}>
    <nu-block width="6sp 100%||10sp 100%|--content-width">
      {
        !email &&
        <nu-form onEventInput={onSubmit} width="100%"
                 text="left" box="y">
          <nu-flex flow="row|||column" gap>
            <Input
              ref={inputRef}
              disabled={loading || null}
              id="email"
              type="email"
              placeholder="Email"
              grow="1"
              big>
            </Input>
            <Button
              width="2sp||3sp|100%"
              action="submit"
              disabled={loading || null}
              special
              big purple>
              Subscribe
            </Button>
          </nu-flex>
          <nu-block color>
            <nu-check for="email" assert="email">
              { VALIDATION_ERROR_EMAIL }
            </nu-check>
          </nu-block>
          {
            error &&
            <nu-block {...insertText(UNABLE_TO_SUBSCRIBE)}></nu-block>
          }
          {
            loading && <nu-progressbar place="outside-bottom 1x" is-purple value="100" width="100%"/>
          }
        </nu-form>
      }
      {
        email && <nu-block
          radius padding="3x 2x"
          fill={props.special ? '#light.20' : '#pink-04.20'}
          color={props.special ? null : 'pink'} as="t1">
          &nbsp;{ props.successMessage }
        </nu-block>
      }
    </nu-block>
  </SiteBlock>;
}

SubscriptionBlock.defaultProps = {
  heading: 'Sign up for Cube.js&nbsp;Releases and&nbsp;Updates',
  description: 'Awesome product updates; no&nbsp;spam.',
  successMessage: THANK_YOU,
};

SubscriptionBlock.propTypes = {
  postUrl: T.string,
  postData: T.object,
  special: T.bool,
  onSuccess: T.func,
  heading: T.string,
  description: T.string,
  successMessage: T.string,
};
