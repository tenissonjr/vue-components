<template>
  <h4 v-if="grupoSelecionadoTermoReferencia.atributos.length > 0">{{ grupoSelecionadoTermoReferencia.descricao }}</h4>
  <template v-for="atributo in grupoSelecionadoTermoReferencia.atributos" :key="atributo.id">
    <atualiza-termo-referencia-atributo-item :atributoTermoReferencia="atributo" />
  </template>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import AtualizaTermoReferenciaAtributoItem from './AtualizaTermoReferenciaAtributoItem.vue';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { grupoSelecionadoTermoReferencia } = storeToRefs(termoReferenciaStore)


</script>
<style scoped>
h4 {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
