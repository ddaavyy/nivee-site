import { lazy } from 'react';

const HomeImport = () => import('@/pages/Home/index');

const pages = {
  Home: lazy(HomeImport),
};

export default pages;
