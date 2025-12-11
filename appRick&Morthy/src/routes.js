import { lazy } from 'react';

const Home = lazy(() => import('../src/pages/Home'));
const Chapter = lazy(() => import('../src/pages/Chapter'));
const Characters = lazy(() => import('../src/pages/Characters'));
const YourOpinion = lazy(() => import('../src/components/FormClient'));
const NotFound = lazy(() => import('../src/pages/NotFound'));

const routes = [
  { path: '/', element: Home, name: 'Home' },
  { path: '/characters', element: Characters, name: 'Characters' },
  { path: '/opinion', element: YourOpinion, name: 'YourOpinion' },
  { path: '/chapters', element: Chapter, name: 'Chapter' },
  { path: '*', element: NotFound, name: 'NotFound' },
];

export default routes;
