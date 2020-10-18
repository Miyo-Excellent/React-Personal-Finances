import React from 'react';
import { Auth, Login } from 'pages';
import { Dashboard } from 'components/Navigation';

export default [
  {
    path: '/',
    name: 'Auth',
    component: (props) => <Auth {...props} />,
    exact: true,
    // strict: true,
    // sensitive: false,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: (props) => <Dashboard {...props} />,
    //  English: This Page is Nesting, Please no use exact on this Route/Page
    //  Español: Esta página esta anidada. Por favor, no use la exact en esta ruta/página.
    // exact: true,
    strict: true,
    sensitive: false,
  },
  {
    path: '/login',
    name: 'Login',
    component: (props) => <Login {...props} />,
    exact: true,
    strict: true,
    sensitive: false,
  },
  {
    // path: '',
    name: 'Auth',
    component: (props) => <Auth {...props} />,
    // exact: true,
    strict: true,
    sensitive: false,
  },
];
