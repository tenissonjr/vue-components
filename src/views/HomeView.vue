<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="m-3 row" v-if="false">
        <notes-preview />
      </div>
      <dash-board v-if="true" />
      <div class="m-3 row">
        <select-products v-if="false" />
      </div>
      <div class="m-3 row" v-if="false">
        <text-editor />
      </div>

      <div class="m-3 row" v-if="false">
        <hystory-view />
      </div>

      <div class="m-3 row">
        <tabs-view />
      </div>

      <div class="m-3 row" v-if="false">
        {{ selectedCities }}
        <app-multi-select
          v-model="selectedCities"
          :options="cities"
          optionLabel="name"
          :filter="true"
          placeholder="Select Cities"
          :maxSelectedLabels="3"
        />
      </div>
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

const selectedCities = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>
