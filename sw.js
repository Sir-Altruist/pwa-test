// install service worker
self.addEventListener('install', event => {
    console.log('Service worker has been installed!')
})

//Activate event
self.addEventListener('activate', event => {
    console.log('Serive worker has been activated!')
})

//fetch event
self.addEventListener('fetch', event => {
    console.log('Fetch event', event)
})
