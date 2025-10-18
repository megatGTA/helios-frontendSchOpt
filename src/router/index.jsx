// TO BE IMPLEMENTED
// React Router placeholder

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import ScheduleOptimization from '../modules/schedule-optimization/pages/ScheduleOptimization';
import Wrapper from '@/layout/Wrapper';

const routes = [
  {
    path: "/",
    element: <Wrapper><ScheduleOptimization /></Wrapper>
  },
  {
    path: "/schedule-optimization",
    element: <Wrapper><ScheduleOptimization /></Wrapper>
  }
];

const router = createBrowserRouter(routes);

export default router;

