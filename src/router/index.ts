// Composables
import { createRouter, createWebHistory } from 'vue-router'
import configs from '@/assets/configs.json';


const routes = [    
  {
      path: '/',
      redirect: '/home',
      name: 'index',
      children: [
          {
              name: 'home',
              hash: '#home',
              path: '/home',
              component: () => import(/* webpackChunkName: "home" */ '@/views/HomePageComponent.vue'),
              meta: { transitionName: '' },
              props: {
                  socialButtons: configs.socialButtons
              }
          },
          {
              name: 'about',
              hash: '#about',
              path: '/about',
              component: () => import(/* webpackChunkName: "home" */ '@/views/AboutPageComponent.vue'),
              meta: { transitionName: '' },
          },
          {
              name: 'life',
              hash: '#life',
              path: '/life',
              component: () => import(/* webpackChunkName: "home" */ '@/views/LifePageComponent.vue'),
              meta: { transitionName: '' },
          },
          {
              name: 'skills',
              hash: '#skills',
              path: '/skills',
              component: () => import(/* webpackChunkName: "home" */ '@/views/SkillsPageComponent.vue'),
              meta: { transitionName: '' },
              props: {
                  logosList: configs.logosList
              }
          }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
