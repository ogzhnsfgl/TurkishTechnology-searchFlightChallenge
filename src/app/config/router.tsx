import withSuspense from '@/components/lazy';
import { MainLayout, withMainLayout } from '@/layouts/main';
import Home from '@/pages/Home';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Result = withMainLayout(
  withSuspense(React.lazy(() => import('@/pages/Result')))
);

const Flights = withMainLayout(
  withSuspense(React.lazy(() => import('@/pages/Flights')))
);

const HomeWithLayout = (
  <MainLayout bgColor="dark">
    <Home />
  </MainLayout>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: HomeWithLayout
  },
  {
    path: '/flights',
    element: <Flights />
  },
  {
    path: '/result',
    element: <Result />
  },
  {
    path: '*',
    element: <Home />
  }
]);

export default router;
