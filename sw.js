const CACHE_NAME = 'gate-quiz-v4';

// Local assets - must all exist for caching to succeed
const LOCAL_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './css/styles.css',
    './js/app.js',
    './js/storage.js',
    './js/quiz-engine.js',
    './icons/icon-192.png',
    './icons/icon-512.png',
    // Question Data Files (actual files in the project)
    './data/questions/index.js',
    './data/questions/engineering-math.js',
    './data/questions/discrete-math.js',
    './data/questions/digital-logic.js',
    './data/questions/coa.js',
    './data/questions/os.js',
    './data/questions/dbms.js',
    './data/questions/networks.js',
    './data/questions/dsa.js',
    './data/questions/algorithms.js',
    './data/questions/toc.js',
    './data/questions/compiler.js',
    './data/questions/08-aptitude.js',
    './data/questions/08b-aptitude-extended.js',
    './data/questions/09-numerical-problems.js',
    './data/questions/10-gateoverflow-pyq.js'
];

// External CDN resources - cached separately to prevent failures from blocking install
const CDN_ASSETS = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'
];

// Install event - cache all assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching local assets...');
                // Cache local assets first (these must all succeed)
                return cache.addAll(LOCAL_ASSETS)
                    .then(() => {
                        console.log('Local assets cached successfully');
                        // Then try to cache CDN assets (failures won't break install)
                        return Promise.allSettled(
                            CDN_ASSETS.map(url =>
                                fetch(url, { mode: 'cors' })
                                    .then(response => {
                                        if (response.ok) {
                                            return cache.put(url, response);
                                        }
                                    })
                                    .catch(err => console.log('CDN cache failed for:', url, err))
                            )
                        );
                    });
            })
            .then(() => {
                console.log('All assets cached, activating immediately');
                // Force immediate activation (important for Safari iOS)
                return self.skipWaiting();
            })
    );
});

// Activate event - clean old caches and take control immediately
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== CACHE_NAME) {
                            console.log('Deleting old cache:', cache);
                            return caches.delete(cache);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service worker activated, claiming clients');
                // Take control of all clients immediately (critical for Safari iOS)
                return self.clients.claim();
            })
    );
});

// Fetch event - Cache-first with network fallback (best for offline)
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Return cached version immediately
                    // Also update cache in background (stale-while-revalidate)
                    fetch(event.request)
                        .then(networkResponse => {
                            if (networkResponse && networkResponse.status === 200) {
                                caches.open(CACHE_NAME)
                                    .then(cache => cache.put(event.request, networkResponse));
                            }
                        })
                        .catch(() => { /* Network unavailable, that's fine */ });

                    return cachedResponse;
                }

                // Not in cache - try network
                return fetch(event.request)
                    .then(networkResponse => {
                        // Cache successful responses for future offline use
                        if (networkResponse && networkResponse.status === 200) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, responseToCache));
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // Network failed and not in cache
                        // For navigation requests, try to return index.html
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html');
                        }
                        // For other requests, return undefined (browser handles error)
                        return undefined;
                    });
            })
    );
});
