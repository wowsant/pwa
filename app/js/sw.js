// http://bit.ly/sw-lifecycle
var CACHE_NAME = 'scache_1';

var CACHE_FILES = [
    '../index.html',
    '../css/style.css',
    'controller.js'
];




self.addEventListener('install', (event) => {
    // SW foi baixado e instalado
    // Passo 1 é cachear o App Shell
    // Preparar a app para funcionar offline

    // abre o cache
    event.waitUntil(
        caches.open(CACHE_NAME)
            // e add arquivos offline no cache
            .then((cache) => {
                return cache.addAll(CACHE_FILES));
})
    // Arquivos já cacheado!
    .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
    // SW está instalado e ativo
    // Podemos terminar o setup
    // Ou limpar cache antigo
});

self.addEventListener('fetch', (event) => {
    // Escuta cada evento
    // E faz alguma coisa para cada request
    // feito da app para API server
});
