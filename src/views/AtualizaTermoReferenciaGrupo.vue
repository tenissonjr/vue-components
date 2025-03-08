<template>
  <template v-for="atributo in grupoTermoReferenciaDTO.atributos" :key="atributo.id">
    <atualiza-termo-referencia-atributo-item :atributoTermoReferenciaDTO="atributo" />
  </template>
</template>
<script setup lang="ts">
import type { IGrupoTermoReferenciaDTO } from '@/views/types/IGrupoTermoReferenciaDTO';
import AtualizaTermoReferenciaAtributoItem from './AtualizaTermoReferenciaAtributoItem.vue';
defineProps<{
  grupoTermoReferenciaDTO: IGrupoTermoReferenciaDTO,
}>();

</script>
