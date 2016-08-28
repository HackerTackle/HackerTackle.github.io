var VERSION = 201608281704;
var CACHE_NAME = 'cache' + VERSION;
var CACHE_FILES = [
  '/',
  '/index.html',
  '/stylesheets/web2016.css',
  '/javascripts/script.js',
  '/images/web2016/btn-arrow.png',
  '/images/web2016/main-sp-bg.png',
  '/images/web2016/popup-close.png',
  '/images/web2016/here.png',
  '/images/web2016/main-sp-ttl.png',
  '/images/web2016/popup-img.png',
  '/images/web2016/icon-blog.png',
  '/images/web2016/main.png',
  '/images/web2016/icon-twitter.png',
  '/images/web2016/nav-title.png',
  '/images/web2016profile/13-h-kis.jpeg',
  '/images/web2016profile/14-t-matsumana.png',
  '/images/web2016profile/17-h-tarunon.jpg',
  '/images/web2016profile/13-k-yasukawa.png',
  '/images/web2016profile/15-h-taro.jpg',
  '/images/web2016profile/17-k-maki.jpg',
  '/images/web2016profile/13-t-nagamine.jpg',
  '/images/web2016profile/15-t-colun.jpg	',
  '/images/web2016profile/17-t-sato.png',
  '/images/web2016profile/14-h-yoichiro.jpeg',
  '/images/web2016profile/16-h-yokoyama.jpg',
  '/images/web2016profile/18-k-hamamoto.jpg',
  '/images/web2016profile/14-k-urushibara.jpg',
  '/images/web2016profile/16-t-takesako.jpg'];


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_FILES);
    })
  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
          var promises = [];
          keys.forEach(function(cacheName) {
            if (cacheName != CACHE_NAME)
              promises.push(caches.delete(cacheName));
          });
          return Promise.all(promises);
    })
  );
});
