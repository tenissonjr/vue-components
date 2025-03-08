<template>
  <h1>Atualizar Termo de Referência</h1>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-card cardHeight="70px">
          <atualiza-termo-referencia-detalhes :termoReferencia="exibicaoTermoReferencia.termoReferencia" />
        </app-card>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <app-card cardHeight="600px">
          <atualiza-termo-referencia-lista-grupos :gruposTermoReferencia="exibicaoTermoReferencia.grupos"
            @onSelected="selecionarGrupo" />
        </app-card>
      </div>
      <div class="col-8">
        <app-card cardHeight="600px">
          <div class="navigation-buttons">
            <button @click="irParaGrupoAnterior" :disabled="isPrimeiroGrupo" class="previous-button">
              &laquo; Anterior
            </button>
            <atualiza-termo-referencia-status />
            <button @click="irParaProximoGrupo" :disabled="isUltimoGrupo" class="next-button">
              Próximo &raquo;
            </button>
          </div>
          <atualiza-termo-referencia-grupo :grupoTermoReferenciaDTO="grupoSelecionadoTermoReferencia" />
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
import { ref, computed } from 'vue';

import type { IExibicaoTermoReferenciaDTO } from '@/views/types/IExibicaoTermoReferenciaDTO';
import exemploTermoReferencia from '@/views/types/IExibicaoTermoReferenciaDTO';
import type { IGrupoTermoReferenciaDTO } from '@/views/types/IGrupoTermoReferenciaDTO';
import AtualizaTermoReferenciaDetalhes from './AtualizaTermoReferenciaDetalhes.vue';
import AtualizaTermoReferenciaListaGrupos from './AtualizaTermoReferenciaListaGrupos.vue';
import AtualizaTermoReferenciaGrupo from './AtualizaTermoReferenciaGrupo.vue';
import AtualizaTermoReferenciaStatus from './AtualizaTermoReferenciaStatus.vue';
const exibicaoTermoReferencia = ref<IExibicaoTermoReferenciaDTO>(exemploTermoReferencia)

const grupoSelecionadoTermoReferencia = ref<IGrupoTermoReferenciaDTO>({
  descricao: '',
  atributos: []
})

// Inicializa grupoSelecionadoTermoReferencia com o primeiro grupo de exibicaoTermoReferencia.grupos
if (exibicaoTermoReferencia.value.grupos.length > 0) {
  grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[0];
}

const selecionarGrupo = (grupoSelected: IGrupoTermoReferenciaDTO) => {
  grupoSelecionadoTermoReferencia.value = grupoSelected;
}
const indiceGrupoCorrente = computed(() => {
  return exibicaoTermoReferencia.value.grupos.findIndex(grupo => grupo === grupoSelecionadoTermoReferencia.value);
});

const isPrimeiroGrupo = computed(() => indiceGrupoCorrente.value === 0);
const isUltimoGrupo = computed(() => indiceGrupoCorrente.value === exibicaoTermoReferencia.value.grupos.length - 1);

const irParaGrupoAnterior = () => {
  if (indiceGrupoCorrente.value > 0) {
    grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[indiceGrupoCorrente.value - 1];
  }
};

const irParaProximoGrupo = () => {
  if (indiceGrupoCorrente.value < exibicaoTermoReferencia.value.grupos.length - 1) {
    grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[indiceGrupoCorrente.value + 1];
  }
};
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
