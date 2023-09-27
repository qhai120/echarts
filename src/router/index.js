import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        redirect: '/home/select/1'
      },
      {
        path: 'select/1',
        component: () => import('../components/Home_item/Home_1.vue'),
        props: true
      },
      {
        path: 'select/2',
        component: () => import('../components/Home_item/Home_2.vue'),
        props: true
      },
      {
        path: 'select/3',
        component: () => import('../components/Home_item/Home_3.vue'),
        props: true
      },
      {
        path: 'select/4',
        component: () => import('../components/Home_item/Home_4.vue'),
        props: true
      },
      {
        path: 'select/5',
        component: () => import('../components/Home_item/Home_5.vue'),
        props: true
      },
      {
        path: 'select/6',
        component: () => import('../components/Home_item/Home_6.vue'),
        props: true
      },
      {
        path: 'select/7',
        component: () => import('../components/Home_item/Home_7.vue'),
        props: true
      },
      {
        path: 'select/8',
        component: () => import('../components/Home_item/Home_8.vue'),
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: '',
        redirect: '/about/about/1'
      },
      {
        path: 'about/1',
        component: () => import('../components/About_item/About_1.vue'),
        props: true
      },
      {
        path: 'about/2',
        component: () => import('../components/About_item/About_2.vue'),
        props: true
      },
      {
        path: 'about/3',
        component: () => import('../components/About_item/About_3.vue'),
        props: true
      },
      {
        path: 'about/4',
        component: () => import('../components/About_item/About_4.vue'),
        props: true
      },
      {
        path: 'about/5',
        component: () => import('../components/About_item/About_5.vue'),
        props: true
      },
      {
        path: 'about/6',
        component: () => import('../components/About_item/About_6.vue'),
        props: true
      },
      {
        path: 'about/7',
        component: () => import('../components/About_item/About_7.vue'),
        props: true
      },
      {
        path: 'about/8',
        component: () => import('../components/About_item/About_8.vue'),
        props: true
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  next()
})

export default router
