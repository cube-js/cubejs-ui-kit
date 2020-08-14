import { useState, useEffect } from 'react';
import fetch from '../utils/fetch';

export const SUBSCRIPTION_URL = 'https://hooks.zapier.com/hooks/catch/2073111/lgugyb/';

/**
 * * Subscription service.
 * @param url - POST URL for subscription.
 * @param data - Additional data for the request.
 * @return {Promise<unknown>|{submit(*=): *, state: string, error: boolean, loading: boolean, email: string}}
 * @constructor
 */
export default function useSubscription(url, data = {}) {
  if (!url) {
    url = SUBSCRIPTION_URL;
  }

  const [state, setState] = useState('initial');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(state === 'loading');
  }, [state]);

  return {
    state,
    error,
    email,
    loading,
    submit(email) {
      setState('loading');
      setLoading(true);

      return fetch.post(url, { email, ...data })
        .then(() => {
          setEmail(email);
          setState('subscribed');
        }, (e) => {
          setError(true);

          throw e;
        })
        .finally(() => {
          setState('initial');
          setLoading(false);
        });
    },
  }
}
