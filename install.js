if(typeof window !== "undefined"){
  window.addEventListener('install', function (event) {
    console.log(event)
    event.waitUntil(
      caches.open('http://localhost:3000/').then(function (cache) {
        return cache.addAll([
          '/styles/globals.css',
          '/styles/zpix.css',
          // etc.
        ]);
      }),
    );
  });
}
