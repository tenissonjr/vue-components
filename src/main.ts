import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppCard from '@/components/AppCard.vue'
import AppDashCard from './components/AppDashCard.vue'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.component('AppCard', AppCard)
app.component('AppDashCard', AppDashCard)

app.mount('#app')
