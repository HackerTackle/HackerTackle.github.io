var VERSION = 201608281704;
var CACHE_NAME = 'cache' + VERSION;
var DOMAIN = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
var CACHE_URLS = [
  DOMAIN + '/',
  DOMAIN + '/index.html',
  DOMAIN + '/stylesheets/web2016.css',
  DOMAIN + '/scripts/script.js',
  DOMAIN + '/images/web2016/btn-arrow.png',
  DOMAIN + '/images/web2016/main-sp-bg.png',
  DOMAIN + '/images/web2016/popup-close.png',
  DOMAIN + '/images/web2016/here.png',
  DOMAIN + '/images/web2016/main-sp-ttl.png',
  DOMAIN + '/images/web2016/popup-img.png',
  DOMAIN + '/images/web2016/icon-blog.png',
  DOMAIN + '/images/web2016/main.png',
  DOMAIN + '/images/web2016/icon-twitter.png',
  DOMAIN + '/images/web2016/nav-title.png',
  DOMAIN + '/images/web2016profile/13-h-kis.jpeg',
  DOMAIN + '/images/web2016profile/14-t-matsumana.png',
  DOMAIN + '/images/web2016profile/17-h-tarunon.jpg',
  DOMAIN + '/images/web2016profile/13-k-yasukawa.png',
  DOMAIN + '/images/web2016profile/15-h-taro.jpg',
  DOMAIN + '/images/web2016profile/17-k-maki.jpg',
  DOMAIN + '/images/web2016profile/13-t-nagamine.jpg',
  DOMAIN + '/images/web2016profile/15-t-colun.jpg	',
  DOMAIN + '/images/web2016profile/17-t-sato.png',
  DOMAIN + '/images/web2016profile/14-h-yoichiro.jpeg',
  DOMAIN + '/images/web2016profile/16-h-yokoyama.jpg',
  DOMAIN + '/images/web2016profile/18-k-hamamoto.jpg',
  DOMAIN + '/images/web2016profile/14-k-urushibara.jpg',
  DOMAIN + '/images/web2016profile/16-t-takesako.jpg'];
var CACHE_FLAG_LIST = {};
CACHE_URLS.forEach(
  function(cacheFile){
    CACHE_FLAG_LIST[cacheFile] = true;
  }
);

self.addEventListener('install', function(event) {
  DOMAIN + event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(CACHE_URLS.map(function(url) {
        return fetch(new Request(url)).then(function(response) {
          if (response.ok){
            return cache.put(response.url, response);
          }else{
            return Promise.reject('Invalid response.  URL:' + response.url + ' Status: ' + response.status);
          }
      });
    }));
  }));
});

self.addEventListener('fetch', function(event) {
  if (CACHE_FLAG_LIST[event.request.url]){
    event.respondWith(caches.match(event.request, {cacheName: CACHE_NAME}));
  }
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
