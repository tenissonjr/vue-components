<template>
  <i class="bi-info-circle-fill" v-tooltip="{ value: anotacoes }"></i>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { IAnotacaoAtributoTermoReferenciaDTO } from './types/IAnotacaoAtributoTermoReferenciaDTO';

const props = defineProps<{
  anotacoes: IAnotacaoAtributoTermoReferenciaDTO[],
}>();


const anotacoes = computed(() => {
  return props.anotacoes.map(anotacao => anotacao.texto).join('\n ');
});

</script>
