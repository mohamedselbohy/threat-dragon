import {createRouter, createWebHistory} from 'vue-router';

import { gitRoutes } from './git.js';
import HomePage from '../views/HomePage.vue';
import { localRoutes } from './local.js';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'MainDashboard',
    component: () => import(/* webpackChunkName: "main-dashboard" */ '../views/MainDashboard.vue')
  },
  {
    path: '/oauth-return',
    name: 'OAuthReturn',
    component: () => import(/* webpackChunkName: "oauth-return" */ '../views/OauthReturn.vue')
  },
  {
    path: '/demo/select',
    name: 'DemoSelect',
    component: () => import(/* webpackChunkName: "demo-select" */ '../views/demo/SelectDemoModel.vue')
  },
  ...gitRoutes,
  ...localRoutes
];

const router = new createRouter({
  history: createWebHistory(),
  routes
});

export default router;
