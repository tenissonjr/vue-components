<template>


  <div class="statusbar container">
    <div class="row align-items-center">
      <div class="col-2">
        <button @click="termoReferenciaStore.irParaGrupoAnterior" :disabled="termoReferenciaStore.isPrimeiroGrupo"
          class="previous-button">
          &laquo; Anterior
        </button>
      </div>
      <div class="col-3 text-center">

        <input type="checkbox" v-model="exibirPainelNavegacao" /> Exibir Painel de Navegação
      </div>
      <div class="col-5 text-center">

        <ProgressBar :value="percentualAtributosTermoReferenciaRespondidos">Total de atributos informados : {{
          totalAtributosRespondidosRespondidosTermoReferencia }} / {{
            totalAtributosTermoReferencia }}</ProgressBar>

      </div>
      <div class="col-2">
        <button @click="termoReferenciaStore.irParaProximoGrupo" :disabled="termoReferenciaStore.isUltimoGrupo"
          class="next-button">
          Próximo &raquo;
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProgressBar from 'primevue/progressbar';
import { storeToRefs } from 'pinia';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { totalAtributosTermoReferencia, totalAtributosRespondidosRespondidosTermoReferencia, percentualAtributosTermoReferenciaRespondidos, exibirPainelNavegacao } = storeToRefs(termoReferenciaStore)

</script>
<style scoped>
.statusbar {
  margin-top: 1rem;

}


.button {

  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.previous-button {
  margin-left: 20px;
}

.next-button {
  margin-right: 20px;
}
</style>
