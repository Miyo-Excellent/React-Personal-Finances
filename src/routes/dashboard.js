import React from 'react';
import { Contact, Home, Product, Products, Shopping } from 'pages';

export default [
  {
    path: '/dashboard',
    name: 'Home',
    component: (props) => <Home {...props} />,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/contact',
    name: 'Contact',
    component: (props) => <Contact {...props} />,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/shopping',
    name: 'Shopping',
    component: (props) => <Shopping {...props} />,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/products',
    name: 'Products',
    component: (props) => <Products {...props} />,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/product/:id',
    name: 'Product',
    component: (props) => <Product {...props} />,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: false,
  },
];
