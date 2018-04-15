const CACHE_NAME = 'my-site-cache-v1';

// attach lifecycle
self.addEventListener('install', install);
self.addEventListener('fetch', fetch);

const urlsToCache = [
    '/',
    '/sw.js',
    '/index.html',
    '/article.html',
    '/test.json',
    '/css/main.css',
    '/js/app.js'
];

function install(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => (cache.addAll(urlsToCache))));
}

function fetch(event){
    console.log('Fetch happened', event);
    event.respondWith(
        caches.match(event.request)
            .then(response => (response || fetch(event.request)))
            .catch(err => console.log('err', err))
    );
}