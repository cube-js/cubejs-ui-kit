import { useState, useEffect } from 'react';
import fetch from '../utils/fetch';

export const SUBSCRIPTION_URL = 'https://hooks.zapier.com/hooks/catch/2073111/lgugyb/';

export default function Subscription(url) {
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

      fetch.post(url, { email })
        .then(() => {
          setEmail(email);
          setState('subscribed');
        }, () => {
          setError(true);
        })
        .finally(() => {
          setState('initial');
          setLoading(false);
        });
    },
  }
}
