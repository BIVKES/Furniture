import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import AppLogo from './components/AppLogo.vue'
import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'
import NavMenu from './components/NavMenu.vue'

import './assets/styles/_base.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AppLogo', AppLogo)
app.component('BaseButton', BaseButton)
app.component('BaseInput', BaseInput)
app.component('NavMenu', NavMenu)

app.mount('#app')