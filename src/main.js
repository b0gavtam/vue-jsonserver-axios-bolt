import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "vue-toastification/dist/index.css"

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import App from './App.vue'
import router from './router'
import Toast  from 'vue-toastification'

const app = createApp(App)
const options={
    position:"top-right",
    timeout:2000,
    
}

app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')
