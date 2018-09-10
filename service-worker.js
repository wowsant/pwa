let cacheName = 'tcc_pwa_v2';
let filesToCache = [
	'./',
	'index.html',
    'assets/css/main.css',
    'assets/css/font-awesome.min.css',
    'assets/css/noscript.css',
    'assets/js/breakpoints.min.js',
    'assets/js/browser.min.js',
    'assets/js/jquery.min.js',
    'assets/js/jquery.scrollex.min.js',
    'assets/js/jquery.scrolly.min.js',
    'assets/js/main.js',
    'register.js',
	'assets/js/util.js',
	'service-worker.js'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
