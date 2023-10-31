//Import components
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Import styles
import 'styles/normalize.css'
import 'styles/style.css'

//Create vue app
createApp(App).use(router).use(createPinia()).mount('#app')
