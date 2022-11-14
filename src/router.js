import AboutComponent from "./components/Pages/AboutComponent";
import HomeComponent from "@/components/Pages/HomeComponent";
import LifeComponent from "@/components/Pages/LifeComponent";
import * as Router from 'vue-router';
import SkillsComponent from "@/components/Pages/SkillsComponent";

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
                    component: HomeComponent,
                    meta: { transitionName: '' },
                },
                {
                    name: 'about',
                    hash: '#about',
                    path: '/about',
                    component: AboutComponent,
                    meta: { transitionName: '' },
                },
                {
                    name: 'life',
                    hash: '#life',
                    path: '/life',
                    component:LifeComponent,
                    meta: { transitionName: '' },
                },
                {
                    name: 'skills',
                    hash: '#skills',
                    path: '/skills',
                    component:SkillsComponent,
                    meta: { transitionName: '' },
                }
            ]
        }
    ]



export const router = Router.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: Router.createWebHistory(),
    routes,
    /*scrollBehavior (to/!*, from, savedPosition*!/) {
       console.log(to, this);
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }*/
})

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length

    if(toDepth === 2 && fromDepth === 2) {
        const toPath = to.path;
        const fromPath = from.path;
        // eslint-disable-next-line no-debugger
        //debugger;
        const i = routes[0].children.findIndex((el) => el.path === toPath);
        const j = routes[0].children.findIndex((el) => el.path === fromPath);
        if(i !== j && i >= 0 && j >= 0) {
            const className =  i < j ? 'slide-down' : 'slide-up'
            //console.log(className);
            to.meta.transitionName = className;
        }
    }

})



export default router;
