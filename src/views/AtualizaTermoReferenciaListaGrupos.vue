<template>
 <ul>
  <li v-for="grupo in gruposTermoReferencia" :key="grupo.descricao">
    {{ grupo.descricao }}
  </li>
 </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { IGrupoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IGrupoTermoReferenciaDTO';

const gruposTermoReferencia = ref<IGrupoTermoReferenciaDTO[]>([]);
</script>
