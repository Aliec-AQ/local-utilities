import { createRouter, createWebHistory } from 'vue-router'
import { modules } from '@/modules/modules'

// Generate routes from modules
const moduleRoutes = modules.map(module => ({
  name: module.id,
  path: module.path,
  component: () => import(`@/modules/${module.id}/views/${module.view}.vue`),
}))

// Router setup
const router = createRouter({
  history: createWebHistory("/local-utilities/"),
  routes: [
    {
      name: 'root',
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    ...moduleRoutes,
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

// Handle vrrp (vue router redirect path) query parameter because github pages doesn't support htaccess for redirecting
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

// Redirect to root if no route matched
router.beforeEach((to, _, next) => {
  if (to.matched.length === 0) {
    next({ name: 'root' })
  } else {
    next()
  }
})

export default router