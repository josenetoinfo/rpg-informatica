const CACHE_NAME = 'ava-cache-v8';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/rpg_bg.png',
  './assets/avatar_knight.png',
  './assets/avatar_knight_female_1777939392579.png',
  './assets/chest_closed.png',
  './assets/chest_open.png',
  './assets/gold_coin.png',
  './assets/magic_key.png',
  './assets/world_map_uc1_1777939448890.png',
  './assets/world_map_uc2.png',
  './assets/world_map_uc3.png',
  './assets/world_map_uc4.png',
  './assets/world_map_ict.png',
  './assets/boss_monster.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
