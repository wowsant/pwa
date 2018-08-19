$(function () {
    // Registrar o ServiceWorker na aplicação
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js', { scope: '' })
            .then((registration) => {
                console.log('registrou');
            });
    }

});