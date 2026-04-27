const CACHE_NAME = 'marine-life-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'app.js',
  'data.json',
  'manifest.json',
  'icon.png',
  'images/octopus.jpg',
  'images/bluewhale.jpeg',
  'images/clownfish.jpg',
  'images/jellyfish.jpg',
  'images/anemone.jpg',
  'audio/octopus.mp3',
  'audio/bluewhale.mp3',
  'audio/clownfish.mp3',
  'audio/jellyfish.mp3',
  'audio/anemone.mp3'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
