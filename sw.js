const CACHE_NAME = 'streetwearx-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './LogoStreetWearX.jpg',
  './video.mp4'
];

// Instalar SW y guardar archivos en caché
self.addEventListener('install', e => {
  console.log('Service Worker: Instalando...');
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activar SW
self.addEventListener('activate', e => {
  console.log('Service Worker: Activado');
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
