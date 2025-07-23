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
import AppTabs from './components/AppTabs.vue'
import AppTabButton from './components/AppTabButton.vue'
import AppTabContent from './components/AppTabContent.vue'
import AppMultiSelect from './components/AppMultiSelect.vue'
import AppStepper from './components/AppStepper.vue'
import AppStep from './components/AppStep.vue'
import AppStepPanel from './components/AppStepPanel.vue'
import AppCard from './components/AppCard.vue'
import AppDataView from './components/AppDataView/AppDataView.vue'

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
app.component('AppBadge', AppBadge)
app.component('AppNoteItem', AppNoteItem)
app.component('AppDualSelectList', AppDualSelectList)
app.component('AppHistory', AppHistory)
app.component('AppTextEditor', AppTextEditor)
app.component('AppTabs', AppTabs)
app.component('AppTabButton', AppTabButton)
app.component('AppTabContent', AppTabContent)
app.component('AppMultiSelect', AppMultiSelect)
app.component('AppStepper', AppStepper)
app.component('AppStepPanel', AppStepPanel)
app.component('AppStep', AppStep)
app.component('AppCard', AppCard)
app.component('AppDataView', AppDataView)

app.directive('tooltip', Tooltip)
app.mount('#app')

import 'primeicons/primeicons.css'

//import '@assets/primevue-adapter.css'
