import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Aos from 'aos'

const app = createApp(App)

app.use(router)
app.mount('#app')
Aos.init({
  duration: 1000,
  easing: 'ease-in-out',
})
