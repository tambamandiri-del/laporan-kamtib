const CACHE_NAME = "kamtib-v5-HD-100PCT";
const FILES = ["./iphone-v2.html", "./manifest.json", "./icon-512.png", "./icon-192.png"];

self.addEventListener("install", e => {
  self.skipWaiting(); // PAKSA UPDATE!
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)));
});

self.addEventListener("activate", e => {
  // HAPUS CACHE LAMA!
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); })
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
