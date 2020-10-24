import { Details, Home, Product, Settings, Calendar } from 'pages';

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
    path: '/dashboard/details',
    name: 'Detalles',
    component: Details,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/calendar',
    name: 'Calendario',
    component: Calendar,
    exact: true,
    strict: true,
    sensitive: false,
    showOnAppBar: true,
  },
  {
    path: '/dashboard/settings',
    name: 'Configuraciones',
    component: Settings,
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
