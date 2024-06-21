import type { RouteDefinition } from '@solidjs/router';

import { Login } from './login';
import { App } from './app';
import { User } from './user';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/app',
    component: App,
  },
  {
    path: '/user/:id',
    component: User,
  },
];
