import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Styles
import '@/assets/styles.css'
import 'primeicons/primeicons.css'


// PLUGINS
import pwa from './plugins/PWA';
import router from './router.js';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const piniaInstance = createPinia();
piniaInstance.use(piniaPluginPersistedstate);

app.use(router);
app.use(piniaInstance);
app.use(pwa);

// Mount the app
app.mount('#app');

// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/local-utilities/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered');
      
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker?.addEventListener('statechange', () => {
          if (newWorker.state === 'activated') {
            console.log('New service worker available');
          }
        });
      });
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}