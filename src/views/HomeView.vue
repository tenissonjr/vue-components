<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="m-3 row" v-if="false">
        <notes-preview />
      </div>
      <div class="m-3 row" v-if="false">
        <dash-board />
      </div>

      <div class="m-3 row" v-if="false">
        <steps-view />
      </div>
      <div class="m-3 row">
        <select-products v-if="false" />
      </div>
      <div class="m-3 row" v-if="false">
        <text-editor />
      </div>

      <div class="m-3 row" v-if="false">
        <hystory-view />
      </div>

      <div class="m-3 row" v-if="false">
        <tabs-view />
      </div>

      <div class="m-3 row" v-if="false">
        {{ selectedCities }}
        <app-multi-select v-model="selectedCities" :options="cities" optionLabel="name" :filter="true"
          placeholder="Select Cities" :maxSelectedLabels="3" />
      </div>

      <div class="m-3 row" v-if="false">
        <atualizar-termo-referencia />
      </div>

      <div class="m-3 row" v-if="false">
        <data-table-view />
      </div>

      <app-auto-button :seconds="30" @onTriggerAction="handleClick" label="Salvar rascunho" />



    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DashBoard from './DashBoard.vue'
import SelectProducts from './SelectProducts.vue'
import NotesPreview from './NotesPreview.vue'
import TextEditor from './TextEditor.vue'
import HystoryView from './HistoryView.vue'
import TabsView from './TabsView.vue'
import StepsView from './StepsView.vue'
import AtualizarTermoReferencia from '@/modules/termoreferencia/pages/AtualizarTermoReferencia.vue'
import DataTableView from './DataView.vue'
const selectedCities = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])


const handleClick = () => {
  console.log('Ação automática iniciada!')
}
</script>
