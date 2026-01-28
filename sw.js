const CACHE_NAME = 'gate-quiz-v4';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/styles.css',
    './js/app.js',
    './js/storage.js',
    './js/quiz-engine.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    // External resources
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
    // Question Data Files (actual files)
    './data/questions/index.js',
    './data/questions/algorithms.js',
    './data/questions/os.js',
    './data/questions/dbms.js',
    './data/questions/coa.js',
    './data/questions/compiler.js',
    './data/questions/digital-logic.js',
    './data/questions/discrete-math.js',
    './data/questions/dsa.js',
    './data/questions/engineering-math.js',
    './data/questions/networks.js',
    './data/questions/toc.js',
    './data/questions/08-aptitude.js',
    './data/questions/08b-aptitude-extended.js',
    './data/questions/09-numerical-problems.js',
    './data/questions/10-gateoverflow-pyq.js'
];

// Install: Cache all assets
self.addEventListener('install', event => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching app shell and content');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('[SW] Installation complete');
                return self.skipWaiting(); // Activate immediately
            })
    );
});

// Activate: Clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Activation complete');
            return self.clients.claim(); // Take control immediately
        })
    );
});

// Fetch: Cache-First strategy for offline persistence
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Found in cache, return immediately
                    // Optionally update cache in background for assets
                    if (shouldUpdateInBackground(event.request)) {
                        updateCacheInBackground(event.request);
                    }
                    return cachedResponse;
                }

                // Not in cache, fetch from network
                return fetch(event.request)
                    .then(networkResponse => {
                        // Cache successful responses
                        if (networkResponse && networkResponse.status === 200) {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return networkResponse;
                    })
                    .catch(error => {
                        console.log('[SW] Fetch failed, offline mode:', error);
                        // Return offline fallback if needed
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                    });
            })
    );
});

// Helper: Check if resource should be updated in background
function shouldUpdateInBackground(request) {
    const url = new URL(request.url);
    // Don't background update for:
    // - Question files (they're large and static after shuffle)
    // - External CDN resources (stable versions)
    const skipPatterns = [
        '/data/questions/',
        'cdn.jsdelivr.net',
        'fonts.googleapis.com'
    ];
    return !skipPatterns.some(pattern => url.href.includes(pattern));
}

// Helper: Update cache in background (for app shell only)
function updateCacheInBackground(request) {
    fetch(request)
        .then(response => {
            if (response && response.status === 200) {
                caches.open(CACHE_NAME)
                    .then(cache => cache.put(request, response));
            }
        })
        .catch(() => {
            // Silently fail, we already have cached version
        });
}
