const CACHE_NAME = 'gate-quiz-v5';

// Core app assets (local files only - no CDN that content blockers can block)
const CORE_ASSETS = [
    './',
    './index.html',
    './css/styles.css',
    './js/app.js',
    './js/storage.js',
    './js/quiz-engine.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    // Question Data Files
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

// Optional external assets (may be blocked by content blockers - cache if possible)
const OPTIONAL_EXTERNAL_ASSETS = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'
];

// Install: Cache core assets (must succeed), try optional assets (can fail)
self.addEventListener('install', event => {
    console.log('[SW] Installing v5...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching core assets...');
                // Cache core assets - these MUST succeed
                return cache.addAll(CORE_ASSETS);
            })
            .then(() => {
                console.log('[SW] Core assets cached, attempting optional assets...');
                // Try to cache external assets, but don't fail if blocked
                return caches.open(CACHE_NAME).then(cache => {
                    return Promise.allSettled(
                        OPTIONAL_EXTERNAL_ASSETS.map(url =>
                            fetch(url, { mode: 'cors', credentials: 'omit' })
                                .then(response => {
                                    if (response.ok) {
                                        return cache.put(url, response);
                                    }
                                    console.log('[SW] Skipping blocked/failed:', url);
                                })
                                .catch(err => {
                                    console.log('[SW] External asset blocked:', url, err.message);
                                })
                        )
                    );
                });
            })
            .then(() => {
                console.log('[SW] Installation complete');
                return self.skipWaiting();
            })
    );
});

// Activate: Clean up old caches and take control
self.addEventListener('activate', event => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('[SW] Removing old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Activation complete, taking control');
            return self.clients.claim();
        })
    );
});

// Fetch: Cache-first for local, network-first with cache fallback for external
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // For same-origin (local) requests: strict cache-first
    if (url.origin === self.location.origin) {
        event.respondWith(
            caches.match(event.request)
                .then(cached => {
                    if (cached) {
                        return cached;
                    }
                    // Not in cache, try network and cache result
                    return fetch(event.request)
                        .then(response => {
                            if (response && response.status === 200) {
                                const clone = response.clone();
                                caches.open(CACHE_NAME)
                                    .then(cache => cache.put(event.request, clone));
                            }
                            return response;
                        })
                        .catch(() => {
                            // Offline and not cached - return index.html for navigation
                            if (event.request.destination === 'document') {
                                return caches.match('./index.html');
                            }
                            return new Response('Offline', { status: 503 });
                        });
                })
        );
    } else {
        // For cross-origin (external) requests: try cache first, then network
        // This handles content-blocked resources gracefully
        event.respondWith(
            caches.match(event.request)
                .then(cached => {
                    if (cached) {
                        return cached;
                    }
                    // Not cached, try network (might be blocked)
                    return fetch(event.request)
                        .then(response => {
                            // Only cache successful cross-origin responses
                            if (response && response.status === 200) {
                                const clone = response.clone();
                                caches.open(CACHE_NAME)
                                    .then(cache => cache.put(event.request, clone))
                                    .catch(() => { /* quota exceeded, ignore */ });
                            }
                            return response;
                        })
                        .catch(() => {
                            // External resource blocked or offline
                            // Return empty response to prevent errors
                            console.log('[SW] External resource unavailable:', event.request.url);

                            // For CSS, return empty stylesheet
                            if (event.request.destination === 'style') {
                                return new Response('/* offline fallback */', {
                                    headers: { 'Content-Type': 'text/css' }
                                });
                            }
                            // For JS scripts, return empty script
                            if (event.request.destination === 'script') {
                                return new Response('// offline fallback', {
                                    headers: { 'Content-Type': 'application/javascript' }
                                });
                            }
                            // For fonts, return 404
                            return new Response('', { status: 404 });
                        });
                })
        );
    }
});

// Message handler for manual cache operations
self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
    if (event.data === 'getCacheStatus') {
        caches.open(CACHE_NAME).then(cache => {
            cache.keys().then(keys => {
                event.source.postMessage({
                    type: 'cacheStatus',
                    count: keys.length,
                    version: CACHE_NAME
                });
            });
        });
    }
});
