'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6eeb97417aae96410ed25027ea01eecd",
"assets/AssetManifest.bin.json": "2b3535b2c3a7ca72cf31852bc9b6fad8",
"assets/AssetManifest.json": "4b658a0128b68427f2231ebd9b5c0c00",
"assets/assets/3_5_logo%2520192.png": "519c5ad02c630db5f6ad395155299570",
"assets/assets/3_5_logo%2520512.png": "0b851292f404be8377bc634944b4469b",
"assets/assets/3_5_logo.png": "40245e508fc06798395dac8383fa6176",
"assets/assets/attachment_icon.png": "b9df62703e54310a7c859a3dd0edf56d",
"assets/assets/Battle_Engine_Icon.png": "bdbbe6dd24bce9d52b6f23f8b5134a77",
"assets/assets/discord-mark-blue.png": "7ec94b6df1c5599585ae720cdd698310",
"assets/assets/kofi.png": "dc329224cf461ff6a055ee6409bfe658",
"assets/assets/Solo_Icon.png": "15cd3beb65e6218d8f6bdf7818433803",
"assets/assets/spells.png": "a05e35e0136d492b57808789462554b8",
"assets/assets/Structure_Icon.png": "4dc7424eca305ee132fcb19ef7b7f17f",
"assets/assets/Unit_Icon.png": "833b519e5a44bc485bf5e70aab460820",
"assets/assets/Warbeast_Icon.png": "4e94d780369d34e9b0bb206ad238b53e",
"assets/assets/Warcaster_Icon.png": "8cf1ef2389f05ae6ca90cd942c976565",
"assets/assets/Warjack_Icon.png": "ca1d3d364fb916f08a16b63b69b7ad01",
"assets/assets/Warlock_Icon.png": "0a1d430489f884077128c0271b79d503",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62fff8cc652dc4b9bb35db34b38d3c0b",
"assets/NOTICES": "c537d73d9bb3578dbe5f41b70e8c5486",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b672798798758a82a9761b4ed5fcd680",
"icons/android-icon-144x144.png": "66fd9a3eb68ec0d8bcfbe772ccacf7e8",
"icons/android-icon-192x192.png": "2d0d52b54146aeb9ec0a61d3ef802415",
"icons/android-icon-36x36.png": "fb15d4d18f8af1e4231467091215689d",
"icons/android-icon-48x48.png": "c3a4921dd8a83fbdd6448cd698be7843",
"icons/android-icon-72x72.png": "7b52750ec486c2db5cc7c27668ec633b",
"icons/android-icon-96x96.png": "38cb5e3a1b50cb7db0f67dc3858171e5",
"icons/apple-icon-114x114.png": "a172a08b73147a2c6544fb1f8013cc0f",
"icons/apple-icon-120x120.png": "5a8e755306a643a233e54cc7c349cb59",
"icons/apple-icon-144x144.png": "66fd9a3eb68ec0d8bcfbe772ccacf7e8",
"icons/apple-icon-152x152.png": "00ad18a405f7dc5888849856055c161c",
"icons/apple-icon-180x180.png": "cd95f56b069b84c089654378e6ca8893",
"icons/apple-icon-57x57.png": "5f49c4fccceb74d17ff38540ef845f35",
"icons/apple-icon-60x60.png": "8dda4a12730fa7c3f6a62f20f07167da",
"icons/apple-icon-72x72.png": "7b52750ec486c2db5cc7c27668ec633b",
"icons/apple-icon-76x76.png": "e1c82bb250964bb1b3368ce00e6c4c46",
"icons/apple-icon-precomposed.png": "1bfb055a7d31baed7de74de47394ffa5",
"icons/apple-icon.png": "1bfb055a7d31baed7de74de47394ffa5",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "f9e880841859c74c896f4d4a47ee1cb8",
"icons/favicon-32x32.png": "7c746d9585d7129c9396159c1eb97988",
"icons/favicon-96x96.png": "38cb5e3a1b50cb7db0f67dc3858171e5",
"icons/favicon.ico": "31af0a352d71165450e2020840351b2c",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "66fd9a3eb68ec0d8bcfbe772ccacf7e8",
"icons/ms-icon-150x150.png": "9903e3921c07abef5a2dae8f6e8dc142",
"icons/ms-icon-310x310.png": "df8fa3546d0970d6775375bee035d703",
"icons/ms-icon-70x70.png": "ee246e89b9f3bc9d97b878846db83335",
"index.html": "af4fcc9bad49d6d5591b57b580f292ed",
"/": "af4fcc9bad49d6d5591b57b580f292ed",
"main.dart.js": "62d402c5e19a7bf81ee27f0aba74b31a",
"version.json": "22677a18fd272febd87afe89d1ee8b1a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
