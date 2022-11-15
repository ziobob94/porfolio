import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router  from './router';



// eslint-disable-next-line no-unused-vars
const app = createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount('#app');