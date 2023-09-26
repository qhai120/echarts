import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './compont/common.css'

createApp(App).use(common).use(store).use(router).mount('#app')
