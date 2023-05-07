import AboutPageComponent from "./components/views/AboutPageComponent.vue";
import HomePageComponent from "@/components/views/HomePageComponent.vue";
import LifePageComponent from "@/components/views/LifePageComponent.vue";
import * as Router from 'vue-router';
import SkillsComponent from "@/components/views/SkillsPageComponent.vue";
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
                    component: HomePageComponent,
                    meta: { transitionName: '' },
                    props: {
                        socialButtons: configs.socialButtons
                    }
                },
                {
                    name: 'about',
                    hash: '#about',
                    path: '/about',
                    component: AboutPageComponent,
                    meta: { transitionName: '' },
                },
                {
                    name: 'life',
                    hash: '#life',
                    path: '/life',
                    component:LifePageComponent,
                    meta: { transitionName: '' },
                },
                {
                    name: 'skills',
                    hash: '#skills',
                    path: '/skills',
                    component:SkillsComponent,
                    meta: { transitionName: '' },
                    props: {
                        logosList: configs.logosList
                    }
                }
            ]
        }
    ]



export const router = Router.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: Router.createWebHistory(),
    routes,
    mode: "hash"
})

// eslint-disable-next-line no-unused-vars
/*router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'moveUp' : 'moveUp'
})*/


export default router;
