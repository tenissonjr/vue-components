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
        Total de atributos informados :
        <span class="badge">{{ totalAtributosRespondidosRespondidosTermoReferencia }}</span> /
        <span class="badge">{{ totalAtributosTermoReferencia }}</span> :
        <span :class="['badge', badgeColor]">{{ formattedPercentualAtributosTermoReferenciaRespondidos }}%</span>
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
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { totalAtributosTermoReferencia, totalAtributosRespondidosRespondidosTermoReferencia, percentualAtributosTermoReferenciaRespondidos, exibirPainelNavegacao } = storeToRefs(termoReferenciaStore)


const formattedPercentualAtributosTermoReferenciaRespondidos = computed(() => {
  return percentualAtributosTermoReferenciaRespondidos.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
});
const badgeColor = computed(() => {
  const percent = percentualAtributosTermoReferenciaRespondidos.value;
  if (percent <= 25) return 'badge-red';
  if (percent <= 50) return 'badge-orange';
  if (percent <= 75) return 'badge-yellow';
  return 'badge-green';
});
</script>
<style scoped>
.statusbar {
  margin-top: 1rem;
  border-bottom: 1px solid #b6b6b6;
  padding-bottom: 1rem;

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


.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #141010;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: #b6c5d4;
}

.badge-red {
  background-color: red;
  color: white;
}

.badge-orange {
  background-color: orange;
  color: white;
}

.badge-yellow {
  background-color: yellow;
  color: black;
}

.badge-green {
  background-color: green;
  color: white;
}
</style>
