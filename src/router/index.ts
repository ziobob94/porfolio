// Composables
import { createRouter, createWebHistory } from 'vue-router'
import configs from '@/assets/configs.json';


const routes = [    
    {
        path: '/',
        redirect:'/home',
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('@/views/HomePageComponent.vue'),
                meta: { transitionName: '' },
                props: {
                    socialButtons: configs.socialButtons
                }
            },
            {
                name: 'about',
                path: '/about',
                component: () => import('@/views/AboutPageComponent.vue'),
                meta: { transitionName: '' },
            },
            {
                name: 'life',
                path: '/life',
                component: () => import('@/views/LifePageComponent.vue'),
                meta: { transitionName: '' },
            },
            {
                name: 'skills',
                path: '/skills',
                component: () => import('@/views/SkillsPageComponent.vue'),
                meta: { transitionName: '' },
                props: {
                    logosList: configs.logosList
                }
            }
        ]
    }
]

// console.log("process env ", process.env.BASE_URL)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
