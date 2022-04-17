import { lazy } from 'react';

export const HOME = '/';
export const ABOUT = '/about';
export const POSTS = '/posts';
export const PROJECTS = '/projects';

const routes = [
  {
    path: HOME,
    exact: true,
    element: lazy(() => import('./Pages/About')),
  },
  {
    path: POSTS,
    element: lazy(() => import('./Pages/Posts')),
  },
  {
    path: PROJECTS,
    element: lazy(() => import('./Pages/Projects')),
  },
];

export default routes;
