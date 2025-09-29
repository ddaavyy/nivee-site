import pages from './pages';

export const routes = [
  {
    path: '/',
    element: <pages.Home />,
  },
  {
    path: '/home',
    element: <pages.Home />,
  },
  {
    path: '*',
    element: <pages.Home />,
  },
];
