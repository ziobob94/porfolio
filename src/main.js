import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router  from './router';

const app = createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount('#app');
console.log(app)
