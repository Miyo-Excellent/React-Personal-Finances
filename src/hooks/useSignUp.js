import { useEffect, useState } from 'react';
import { isAlphanumeric, isEmail } from 'validator';

export default () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const hasUser = isAlphanumeric(user);
  const hasPassword = isAlphanumeric(password);
  const hasEmail = isEmail(email);

  function handleChange(name, value) {
    if (name === 'usuario') return setUser(value);
    if (name === 'Email') return setEmail(value);
    if (name === 'password') return setPassword(value);

    return setPassword(value);
  }

  function handleSubmit() {
    // const account = { user, password };
  }

  useEffect(() => {}, []);

  return { user, setUser, hasUser, setEmail, hasPassword, hasEmail, handleChange, handleSubmit };
};
