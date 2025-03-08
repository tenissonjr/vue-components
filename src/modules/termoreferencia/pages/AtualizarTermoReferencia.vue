<template>
  <h1>Atualizar Termo de Referência</h1>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-card cardHeight="70px">
          <atualiza-termo-referencia-detalhes />
        </app-card>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <app-card cardHeight="600px">
          <atualiza-termo-referencia-lista-grupos />
        </app-card>
      </div>
      <div class="col-8">
        <app-card cardHeight="600px">
          <div class="navigation-buttons">
            <button @click="termoReferenciaStore.irParaGrupoAnterior" :disabled="termoReferenciaStore.isPrimeiroGrupo" class="previous-button">
              &laquo; Anterior
            </button>
            <atualiza-termo-referencia-status />
            <button @click="termoReferenciaStore.irParaProximoGrupo" :disabled="termoReferenciaStore.isUltimoGrupo" class="next-button">
              Próximo &raquo;
            </button>
          </div>
          <atualiza-termo-referencia-grupo />
        </app-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="action-button btn btn-primary">Salvar rascunho</button>
        <button class="action-button btn btn-primary">Concluir Termo de Referência</button>
        <button class="action-button btn btn-secondary">Voltar</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AtualizaTermoReferenciaDetalhes from '@/modules/termoreferencia/components/AtualizaTermoReferenciaDetalhes.vue';
import AtualizaTermoReferenciaGrupo from '@/modules/termoreferencia/components/AtualizaTermoReferenciaGrupo.vue';
import AtualizaTermoReferenciaListaGrupos from '@/modules/termoreferencia/components/AtualizaTermoReferenciaListaGrupos.vue';
import AtualizaTermoReferenciaStatus from '@/modules/termoreferencia/components/AtualizaTermoReferenciaStatus.vue';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();


</script>
<style scoped>
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.action-button {
  margin-left: 10px;
}

button {
  padding: 0.5rem 1rem;
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
