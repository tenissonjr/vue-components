<!-- eslint-disable vue/no-mutating-props -->
<template>
  <transition name="fade">
    <div class="container" v-if="atributoTermoReferenciaDTO">
      <div class="row">
        <div class="col-12">
          Atributos : {{ atributoTermoReferenciaDTO.descricao }}
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <app-text-editor v-model="atributoTermoReferenciaDTO.resposta" />
          <hr>
        </div>
      </div>
    </div>
  </transition>

</template>
<script setup lang="ts">
import type { IAtributoTermoReferenciaDTO } from '@/views/types/IAtributoTermoReferenciaDTO';


defineProps<{
  atributoTermoReferenciaDTO: IAtributoTermoReferenciaDTO,
}>();

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}
</style>
