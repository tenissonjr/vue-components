<!-- eslint-disable vue/no-mutating-props -->
<template>
  <transition name="fade">
    <div class="container" v-if="atributoTermoReferencia">
      <div class="row">
        <div class="col-12">
          <h5> {{ atributoTermoReferencia.descricao }} <anotacoes-atributo-termo-referencia
              :anotacoes="atributoTermoReferencia.anotacoes" /></h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <app-text-editor v-model="atributoTermoReferencia.resposta" />
          <hr>
        </div>
      </div>
    </div>
  </transition>

</template>
<script setup lang="ts">
import type { IAtributoTermoReferenciaDTO } from '@/views/types/IAtributoTermoReferenciaDTO';
import AnotacoesAtributoTermoReferencia from './AnotacoesAtributoTermoReferencia.vue';

defineProps<{
  atributoTermoReferencia: IAtributoTermoReferenciaDTO,
}>();

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to,
.fade-leave-active {
  opacity: 0;
}
</style>
