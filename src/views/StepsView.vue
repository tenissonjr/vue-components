<template>
  <app-stepper :value="panelNumber">
    <template #steps-lists>
      <app-step :value="1">Selecionar Tipo de Modelo</app-step>
      <app-step :value="2">Selecionar Modelo</app-step>
      <app-step :value="3">Cadastrar Termo de Referência</app-step>
    </template>
    <template #steps-panels>
      <app-step-panel :value="1" nextPanel="Selecionar Modelo">
        <tipo-modelo-termo-referencia-select />
      </app-step-panel>
      <app-step-panel :value="2" priorPanel="Selecionar Tipo de Modelo"
        nextPanel="Cadastrar Termo de Referência"></app-step-panel>
      <app-step-panel :value="3" priorPanel="Selecionar Modelo"></app-step-panel>
    </template>
  </app-stepper>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import TipoModeloTermoReferenciaSelect from './TipoModeloTermoReferenciaSelect.vue';
const panelNumber = ref(1);

</script>
