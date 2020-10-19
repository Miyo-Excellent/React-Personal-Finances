import { useEffect, useState } from 'react';

export default () => {
  const [token, setToken] = useState('');

  const hasToken = !!token;

  useEffect(() => {}, []);

  return [token, setToken, hasToken];
};
