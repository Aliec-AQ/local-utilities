const CACHE_NAME = 'offline-pwa-v1';
const BASE_PATH = '/local-utilities/';

const URLS_TO_CACHE = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'index.js',
  BASE_PATH + 'style.css',
  BASE_PATH + 'favicon.ico',
  BASE_PATH + 'logo.png',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'primeicons.woff2',
  BASE_PATH + 'primeicons.woff',
  BASE_PATH + 'primeicons.ttf',
  BASE_PATH + 'primeicons.eot',
  BASE_PATH + 'primeicons.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle requests for cached URLs
  const isCachedUrl = URLS_TO_CACHE.some(
    (url) => event.request.url === new URL(url, self.location).href
  );

  if (!isCachedUrl) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // ok, cache the response and return it
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        }
        // not ok, use cache
        return caches.match(event.request);
      })
      .catch(() => {
        // failed, use cache
        return caches.match(event.request);
      })
  );
});