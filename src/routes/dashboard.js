import { Contact, Home, Product, Products, Shopping } from 'pages';

export default [
  {
    path: '/dashboard',
    name: 'Resumen',
    component: Home,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/contact',
    name: 'Contact',
    component: Contact,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/shopping',
    name: 'Shopping',
    component: Shopping,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/products',
    name: 'Products',
    component: Products,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/product/:id',
    name: 'Product',
    component: Product,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: false,
  },
];
