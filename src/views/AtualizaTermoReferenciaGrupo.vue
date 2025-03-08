<template>
  <h4 v-if="grupoTermoReferenciaDTO.atributos.length > 0">{{ grupoTermoReferenciaDTO.descricao }}</h4>
  <template v-for="atributo in grupoTermoReferenciaDTO.atributos" :key="atributo.id">
    <atualiza-termo-referencia-atributo-item :atributoTermoReferencia="atributo" />
  </template>
</template>
<script setup lang="ts">
import type { IGrupoTermoReferenciaDTO } from '@/views/types/IGrupoTermoReferenciaDTO';
import AtualizaTermoReferenciaAtributoItem from './AtualizaTermoReferenciaAtributoItem.vue';
defineProps<{
  grupoTermoReferenciaDTO: IGrupoTermoReferenciaDTO,
}>();

</script>
<style scoped>
h4 {
  margin-top: 20px;
  margin-left: 10px;
}
</style>
