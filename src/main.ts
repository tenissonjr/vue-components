import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppDashCard from './components/AppDashCard.vue'
import AppNoteItem from './components/AppNoteItem.vue'
import AppBadge from './components/AppBadge.vue'
import AppDualSelectList from './components/AppDualSelectList.vue'
import AppTextEditor from './components/AppTextEditor.vue'
import AppHistory from './components/AppHistory.vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: true,
    },
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
app.component('AppBadge', AppBadge)
app.component('AppNoteItem', AppNoteItem)
app.component('AppDualSelectList', AppDualSelectList)
app.component('AppHistory', AppHistory)
app.directive('tooltip', Tooltip)
app.component('AppTextEditor', AppTextEditor)
app.mount('#app')

import 'primeicons/primeicons.css'
