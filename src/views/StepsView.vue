<template>
  <app-stepper :value="panelNumber">
    <template #steps-lists>
      <app-step :value="1">Selecionar Tipo Pedido de Aquisição (SIGMAS)</app-step>
      <app-step :value="2">Selecionar Modelo de Termo de Referência</app-step>
    </template>
    <template #steps-panels>
      <app-step-panel :value="1" nextPanel="Selecionar Modelo de Termo de Referência">
        <selecao-pedido-aquisicao />
      </app-step-panel>
      <app-step-panel :value="2" priorPanel="Selecionar Tipo Pedido de Aquisição (SIGMAS)">
        <selecao-tipo-modelo-termo-referencia />
      </app-step-panel>
    </template>
  </app-stepper>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SelecaoPedidoAquisicao from './SelecaoPedidoAquisicao.vue';
import SelecaoTipoModeloTermoReferencia from './SelecaoTipoModeloTermoReferencia.vue';
import SelacaoModeloTermoReferencia from './SelacaoModeloTermoReferencia.vue';
const panelNumber = ref(1);

</script>
