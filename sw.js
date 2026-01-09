const CACHE_NAME = 'gate-quiz-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/styles.css',
    './js/app.js',
    './js/storage.js',
    './js/quiz-engine.js',
    './icons/icon-192.png',
    './icons/icon-512.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
    // Question Data Files
    './data/questions/index.js',
    './data/questions/01-engineering-math-extended.js',
    './data/questions/01b-linear-algebra.js',
    './data/questions/01c-probability.js',
    './data/questions/01d-linear-algebra-exhaustive.js',
    './data/questions/01e-probability-exhaustive.js',
    './data/questions/01f-calculus-mega.js',
    './data/questions/02-discrete-math.js',
    './data/questions/02b-discrete-math-extended.js',
    './data/questions/02c-discrete-math-logic-sets.js',
    './data/questions/02d-graph-theory-exhaustive.js',
    './data/questions/02e-graph-theory-mega.js',
    './data/questions/03-digital-logic.js',
    './data/questions/03b-digital-logic-extended.js',
    './data/questions/03c-digital-logic-exhaustive.js',
    './data/questions/03d-digital-logic-part2.js',
    './data/questions/03e-digital-logic-supplement.js',
    './data/questions/03f-digital-gate-pyq.js',
    './data/questions/04-coa-os.js',
    './data/questions/04b-os-extended.js',
    './data/questions/04c-coa-extended.js',
    './data/questions/04d-coa-exhaustive.js',
    './data/questions/04e-os-exhaustive.js',
    './data/questions/04f-coa-vm-supplement.js',
    './data/questions/04g-os-mega.js',
    './data/questions/04h-os-gate-pyq.js',
    './data/questions/05-dbms-networks.js',
    './data/questions/05b-dbms-extended.js',
    './data/questions/05c-networks-extended.js',
    './data/questions/05d-dbms-exhaustive.js',
    './data/questions/05e-networks-exhaustive.js',
    './data/questions/05f-dbms-btree-supplement.js',
    './data/questions/05g-networks-supplement.js',
    './data/questions/05h-dbms-mega.js',
    './data/questions/05i-networks-mega.js',
    './data/questions/05j-networks-gate-pyq.js',
    './data/questions/05k-dbms-gate-pyq.js',
    './data/questions/06-dsa-algorithms.js',
    './data/questions/06b-dsa-extended.js',
    './data/questions/06c-algorithms-extended.js',
    './data/questions/06d-dsa-exhaustive.js',
    './data/questions/06e-algorithms-exhaustive.js',
    './data/questions/06f-c-programming-supplement.js',
    './data/questions/06g-algorithms-supplement.js',
    './data/questions/06h-dsa-mega.js',
    './data/questions/06i-dsa-algo-gate-pyq.js',
    './data/questions/07-toc-compiler.js',
    './data/questions/07b-toc-compiler-extended.js',
    './data/questions/07c-toc-exhaustive.js',
    './data/questions/07d-compiler-exhaustive.js',
    './data/questions/07e-compiler-comprehensive.js',
    './data/questions/07f-toc-mega.js',
    './data/questions/07g-compiler-gate-pyq.js',
    './data/questions/07h-toc-gate-pyq.js',
    './data/questions/08-aptitude.js',
    './data/questions/08b-aptitude-extended.js',
    './data/questions/09-numerical-problems.js',
    './data/questions/10-gateoverflow-pyq.js'
];

// Install: Cache all assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate: Clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch: Stale-While-Revalidate pattern
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(
                    networkResponse => {
                        // Don't cache non-successful responses or non-http/https
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Update cache with new response
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    }
                ).catch(() => {
                    // Network failed
                    // If cachedResponse exists, we already returned it (but promise chain continues? no, see below)
                    // Actually, for Stale-While-Revalidate, we return cached immediately if found, 
                    // BUT we also want to update the cache. 
                });

                // Return cached response immediately if available, otherwise wait for network
                return cachedResponse || fetchPromise;
            })
    );
});
