<template>
  <div class="card" :style="{ maxHeight: cardHeight }">
    <ul>
      <li v-for="grupo in gruposTermoReferencia" :key="grupo.descricao">

        <a href="#" @click="handleClick(grupo)">{{ grupo.descricao }}</a>
      </li>
    </ul>
  </div>

</template>
<script setup lang="ts">
import { defineEmits, withDefaults, defineProps } from 'vue';
import type { IGrupoTermoReferenciaDTO } from '@/views/types/IGrupoTermoReferenciaDTO';

const emit = defineEmits(['onSelected']);


withDefaults(defineProps<{
  gruposTermoReferencia: IGrupoTermoReferenciaDTO[],
  cardHeight?: string
}>(), {
  cardHeight: '400px'
});


const handleClick = (grupo: IGrupoTermoReferenciaDTO) => {
  emit('onSelected', grupo);
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  width: 98%;
  overflow-y: auto;
}

div {
  margin: 0.5rem 0;
}
</style>
