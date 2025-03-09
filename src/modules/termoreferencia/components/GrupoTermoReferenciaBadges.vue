<template>
  <span class="badges-container" v-tooltip="{ value: mensagensErro }">
    <Badge :value="value" size="small" :severity="severity" />
  </span>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { IGrupoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IGrupoTermoReferenciaDTO';
import Badge from 'primevue/badge';

const props = defineProps<{
  grupoTermoReferencia: IGrupoTermoReferenciaDTO,
}>();

const totalRespostasNaoNulasGrupo = (): number => {
  let totalErros: number = 0;
  props.grupoTermoReferencia.atributos.forEach((atributo) => {
    if (!atributo.resposta || atributo.resposta.length === 0) {
      totalErros++;
    }
  });
  return totalErros;
};

const value = computed((): string => {
  return totalRespostasNaoNulasGrupo() > 0 ? totalRespostasNaoNulasGrupo().toString() : 'Ok';
});



const severity = computed(() => {
  return totalRespostasNaoNulasGrupo() > 0 ? 'danger' : 'success';
});


const mensagensErro = computed(() => {
  return props.grupoTermoReferencia.atributos.map(atributo => {
    if (!atributo.resposta || atributo.resposta.length === 0) {
      return `O campo "${atributo.descricao}" não foi informado.`;
    }
    return '';
  }).join('\n');
});


</script>
<style scoped>
.badges-container {
  margin-left: 8px;
  color: white;
}
</style>
