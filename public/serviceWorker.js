//cada vez que hacemos un restart (stop -> start) del sw se va a correr este codigo
let cacheName = "myCV-cache";
let cachedURLs = [
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/curriculum.html',
    '/'
]
this.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName).then(cache =>{
            cache.addAll(cachedURLs)
        })
    )
})
this.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            if(!!res){
                return res
            } 
        })
    )
})