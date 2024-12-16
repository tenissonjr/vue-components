import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppDashCard from './components/AppDashCard.vue'
import AppDualSelectList from './components/AppDualSelectList.vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },

  locale: {
    emptyMessage: '',
    aria: {
      moveTop: 'Mover para o início',
      moveUp: 'Mover para cima',
      moveDown: 'Mover para baixo',
      moveBottom: 'Mover para o final',
      moveToTarget: 'Selecionar item',
      moveToSource: 'Desmarcar item',
      moveAllToTarget: 'Selecionar tudo',
      moveAllToSource: 'Desmarcar tudo',
      selectionMessage: '{0} itens selecionados',
    },
  },
})
app.component('AppDashCard', AppDashCard)
app.component('AppDualSelectList', AppDualSelectList)
app.mount('#app')
