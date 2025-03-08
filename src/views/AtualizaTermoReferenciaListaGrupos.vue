<template>
  <ul>
    <li v-for="grupo in gruposTermoReferencia" :key="grupo.descricao">
      <a href="#" @click="handleClick(grupo)">{{ grupo.descricao }}<grupo-termo-referencia-badges
          :grupoTermoReferencia="grupo" /></a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import type { IGrupoTermoReferenciaDTO } from '@/views/types/IGrupoTermoReferenciaDTO';
import GrupoTermoReferenciaBadges from './types/GrupoTermoReferenciaBadges.vue';

const emit = defineEmits(['onSelected']);


defineProps<{
  gruposTermoReferencia: IGrupoTermoReferenciaDTO[]
}>();


const handleClick = (grupo: IGrupoTermoReferenciaDTO) => {
  emit('onSelected', grupo);
};



</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

a {
  margin-left: 20px;
  margin-top: 10px;
  display: block;
}

li {
  cursor: pointer;
}
</style>
