import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Products from '@/pages/admin/Products.vue';
import Admin from '@/pages/admin/Admin.vue';
import Main from '@/pages/Main.vue';
import ProductsCreate from '@/pages/admin/ProductsCreate.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: 'products',
        component: Products,
      },
      {
        path: 'products/create',
        component: ProductsCreate,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
