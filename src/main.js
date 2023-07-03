import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/simplelightbox/dist/simple-lightbox.min.css'
import './assets/theme.js'
import './assets/theme.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/simplelightbox/dist/simple-lightbox.min.js'
import './firebase/init.js'

createApp(App).use(router).mount('#app')

