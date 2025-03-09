<template>
  <app-tabs :value="1">
    <template #tab-buttons>
      <app-tab-button :value="1">Atributos</app-tab-button>
      <app-tab-button :value="2">Validações</app-tab-button>
    </template>
    <template #tab-contents>
      <app-tab-content :value="1">
        <atualiza-termo-referencia-lista-grupos />
      </app-tab-content>
      <app-tab-content :value="2">
        <atualiza-termo-referencia-lista-validacoes />
      </app-tab-content>
    </template>
  </app-tabs>
</template>
<script setup lang="ts">
import AtualizaTermoReferenciaListaGrupos from '@/modules/termoreferencia/components/AtualizaTermoReferenciaListaGrupos.vue';
import AtualizaTermoReferenciaListaValidacoes from './AtualizaTermoReferenciaListaValidacoes.vue';
</script>
