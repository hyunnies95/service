import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/styles.sass'
import setupInterceptors from './services/setupInterceptors'

setupInterceptors(store)

createApp(App).use(store).use(router).mount('#app')
