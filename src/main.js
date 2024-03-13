import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// app.use(createPinia())
app.use(store).use(router).use(Element3)

app.mount('#app')


window.onerror = function(e){
    console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}