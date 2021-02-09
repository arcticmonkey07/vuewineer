import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/User/Login';
import Registration from '../components/User/Registration';


Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
