import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory("/local-utilities/"),
  routes: [
    {
      name: 'root',
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, _, next) => {
  const query = to.query
  if(query && query.vrrp) {
    const vrrp = query.vrrp

    const vrrpPath = Array.isArray(vrrp) ? vrrp[0] : vrrp;
    if (typeof vrrpPath === 'string') {
      const matchedRoute = router.resolve(vrrpPath);
      if (matchedRoute && matchedRoute.matched.length > 0) {
        to.query = {};
        router.push(vrrpPath);
        return;
      }
    }
  }
  next()
});

router.beforeEach((to, _, next) => {
  if (to.matched.length === 0) {
    next({ name: 'accueil' })
  } else {
    next()
  }
})

export default router