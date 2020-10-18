import { useEffect, useState } from 'react';

export default () => {
  const [token, setToken] = useState('Token Test');

  const hasToken = !!token;

  useEffect(() => {}, []);

  return [token, setToken, hasToken];
};
