const CACHE_NAME = 'qlvl-cache-v4';
const ASSETS = ['./', './index.html', './config.js', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // Tuyệt đối không can thiệp vào yêu cầu tới máy chủ khác (API Supabase, thư viện CDN):
  // nếu cache chúng thì dữ liệu dùng chung sẽ bị cũ.
  if (url.origin !== self.location.origin) return;
  // Với file của chính app: luôn thử tải bản mới từ mạng trước, chỉ dùng bản lưu sẵn khi mất mạng.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
