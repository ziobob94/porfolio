import { createApp } from 'vue';
import App from './App.vue';
import router  from './router';
import Particles from "vue3-particles";



// eslint-disable-next-line no-unused-vars
const app = createApp(App)
    .use(Particles)
    .use(router)
    .mount('#app');