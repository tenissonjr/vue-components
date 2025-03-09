<template>
  Total de questionamentos respondidos : {{ totalAtributosRespondidosRespondidosTermoReferencia }} / {{
    totalAtributosTermoReferencia }}
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { totalAtributosTermoReferencia, totalAtributosRespondidosRespondidosTermoReferencia } = storeToRefs(termoReferenciaStore)

</script>
