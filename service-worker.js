const CACHE_NAME = 'kamtib-v1';
const urlsToCache = ['/laporan-kamtib/','/laporan-kamtib/index.html','/laporan-kamtib/manifest.json','/laporan-kamtib/icon-192.png','/laporan-kamtib/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
