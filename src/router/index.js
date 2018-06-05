import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true },
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      next('login');
    }
  } else {
    next();
  }
});

export default router;
