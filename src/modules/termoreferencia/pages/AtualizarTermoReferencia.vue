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
        <app-card cardHeight="600px" v-if="exibirPainelNavegacao">
          <atualiza-termo-referencia-painel-navegacao />
        </app-card>
      </div>
      <div :class="exibirPainelNavegacao ? 'col-8' : 'col-12'">
        <app-card cardHeight="600px">
          <atualiza-termo-referencia-status />
          <atualiza-termo-referencia-grupo />
        </app-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="action-button btn btn-primary"
          @click="termoReferenciaStore.salvarRascunhoTermoReferencia()">Salvar rascunho</button>
        <button class="action-button btn btn-primary" @click="termoReferenciaStore.concluirTermoReferencia()">Concluir
          Termo de Referência</button>
        <button class="action-button btn btn-secondary">Voltar</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import AtualizaTermoReferenciaDetalhes from '@/modules/termoreferencia/components/AtualizaTermoReferenciaDetalhes.vue';
import AtualizaTermoReferenciaPainelNavegacao from '../components/AtualizaTermoReferenciaPainelNavegacao.vue';
import AtualizaTermoReferenciaGrupo from '@/modules/termoreferencia/components/AtualizaTermoReferenciaGrupo.vue';
import AtualizaTermoReferenciaStatus from '@/modules/termoreferencia/components/AtualizaTermoReferenciaStatus.vue';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();

const { exibirPainelNavegacao } = storeToRefs(termoReferenciaStore);


</script>
<style scoped>
.action-button {
  margin-left: 10px;
}
</style>
