var v = "v1.0";
var f = [
  "./index.html",
  "./page/add.html",
  "./css/bootstrap.min.cssbootstrap.min.css.map",
  "./css/bootstrap.min.css.map",
  "./css/style.css",
  "./js/app.js",
  "./js/bootstrap.bundle.min.js",
  "./js/bootstrap.bundle.min.js.map",
  "./img/Filmoo.jpg",
  "./img/icon/icon16.png",
  "./img/icon/icon24.png",
  "./img/icon/icon32.png",
  "./img/icon/icon64.png",
  "./img/icon/icon256.png",
  "./manifest.json",
  "./sw.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(v).then(function (cache) {
      return cache.addAll(f).catch((err) => {
        console.log("Error in cache.addAll");
      });
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (response) {
            let responseClone = response.clone();

            caches.open(v).then(function (cache) {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(function () {
            return caches.match("./index.html");
          });
      }
    })
  );
});
