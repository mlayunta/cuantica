"use strict";

const PREFIX = "cuantica-bolsillo:" + self.registration.scope + ":";
const CACHE = PREFIX + "edu-1.0.0";
const FILES = [
  "./index.html",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(FILES.map(path => new Request(path, { cache: "reload" })));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(PREFIX) && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;

  const home = new URL("./index.html", scope).pathname;
  const isHome = req.mode === "navigate" &&
    (url.pathname === scope.pathname || url.pathname === home);

  const asset = FILES.find(path => new URL(path, scope).pathname === url.pathname);
  if (!isHome && !asset) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(isHome ? "./index.html" : asset);
    return cached || fetch(req);
  })());
});
