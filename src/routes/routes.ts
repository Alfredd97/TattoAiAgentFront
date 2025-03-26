import { lazy } from 'react';

interface Route {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  label: string;
}

export const routes: Route[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    label: 'Home'
  },
  {
    path: '/gallery',
    component: lazy(() => import('../pages/Gallery')),
    label: 'Gallery'
  },
  {
    path: '/appointment',
    component: lazy(() => import('../pages/Appointment')),
    label: 'Book Appointment'
  },
  {
    path: '/estimate',
    component: lazy(() => import('../pages/CostEstimator')),
    label: 'Cost Estimator'
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/About')),
    label: 'About'
  }
]; 