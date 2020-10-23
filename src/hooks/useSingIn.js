import { useEffect, useState } from 'react';
import { isAlphanumeric } from 'validator';

export default () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const hasUser = isAlphanumeric(user);
  const hasPassword = isAlphanumeric(password);

  function handleChange(name, value) {
    if (name === 'usuario') return setUser(value);
    if (name === 'password') return setPassword(value);
    return setPassword(value);
  }

  function handleSubmit() {
    //const account = { user, password };
  }

  useEffect(() => {}, []);

  return { user, setUser, setPassword, hasUser, hasPassword, handleChange, handleSubmit };
};