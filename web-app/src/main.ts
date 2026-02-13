import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Styles
import '@/assets/styles.css'
import 'primeicons/primeicons.css'


// PLUGINS
import pwa from './plugins/PWA';
import router from './router.js';
import { i18n } from '@/i18n';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const piniaInstance = createPinia();
piniaInstance.use(piniaPluginPersistedstate);

app.use(router);
app.use(piniaInstance);
app.use(i18n);
app.use(pwa);


// Mount the app
app.mount('#app');