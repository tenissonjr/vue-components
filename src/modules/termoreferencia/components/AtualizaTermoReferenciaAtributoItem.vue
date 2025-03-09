<!-- eslint-disable vue/no-mutating-props -->
<template>

  <div class="titulo-atributo">
    <h5> {{ atributoTermoReferencia.descricao }} <anotacoes-atributo-termo-referencia
        :anotacoes="atributoTermoReferencia.anotacoes" /></h5>
  </div>
  <div class="resposta-atributo">
    <app-text-editor v-model="atributoTermoReferencia.resposta" />
    <br>
  </div>



</template>
<script setup lang="ts">
import type { IAtributoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IAtributoTermoReferenciaDTO';
import AnotacoesAtributoTermoReferencia from './AnotacoesAtributoTermoReferencia.vue';


defineProps<{
  atributoTermoReferencia: IAtributoTermoReferenciaDTO,
}>();

</script>
<style scoped>
.titulo-atributo {
  margin-top: 20px;
  margin-left: 10px;
}

.resposta-atributo {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
