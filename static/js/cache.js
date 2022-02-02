if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js');
}

if (window.caches) {
	caches.open('Images-v1').then((cache) => {
		cache.addAll(['/index.html', '/static/']);
	});
}
