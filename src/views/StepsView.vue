<template>
  panelNumber:{{ panelNumber }}
  <app-stepper :value="panelNumber">
    <template #steps-lists>
      <app-step :value="1">Tipo de Modelo</app-step>
      <app-step :value="2">Modelo</app-step>
      <app-step :value="3">TR</app-step>
    </template>
    <template #steps-panels>
      <app-step-panel :value="1" nextPanel="Modelo">
        <tipo-modelo-termo-referencia-select />
      </app-step-panel>
      <app-step-panel :value="2" priorPanel="Tipo" nextPanel="TR">2</app-step-panel>
      <app-step-panel :value="3" priorPanel="Modelo">3</app-step-panel>
    </template>
  </app-stepper>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import TipoModeloTermoReferenciaSelect from './TipoModeloTermoReferenciaSelect.vue';
const panelNumber = ref(1);

</script>
