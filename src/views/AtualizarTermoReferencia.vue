<template>
  <h1>Atualizar Termo de Referência</h1>

  <div class="container">
    <div class="row">
      <div class="col-12">

        <atualiza-termo-referencia-detalhes :termoReferencia="exibicaoTermoReferencia.termoReferencia" />
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <app-card cardHeight="500px">
          <atualiza-termo-referencia-lista-grupos :gruposTermoReferencia="exibicaoTermoReferencia.grupos"
            @onSelected="handleGrupoSelecionado" />
        </app-card>
      </div>
      <div class="col-8">
        <app-card cardHeight="500px">
          <atualiza-termo-referencia-grupo :grupoTermoReferenciaDTO="grupoSelecionadoTermoReferencia" />
          <div class="navigation-buttons">
            <button @click="navigateToPrevious" :disabled="isFirstGroup" class="previous-button">
              &laquo; Anterior</button>
            <button @click="navigateToNext" :disabled="isLastGroup" class="next-button">Próximo &raquo;</button>
          </div>
        </app-card>
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

const exibicaoTermoReferencia = ref<IExibicaoTermoReferenciaDTO>(exemploTermoReferencia)

const grupoSelecionadoTermoReferencia = ref<IGrupoTermoReferenciaDTO>({
  descricao: '',
  atributos: []
})

// Inicializa grupoSelecionadoTermoReferencia com o primeiro grupo de exibicaoTermoReferencia.grupos
if (exibicaoTermoReferencia.value.grupos.length > 0) {
  grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[0];
}

const handleGrupoSelecionado = (grupoSelected: IGrupoTermoReferenciaDTO) => {
  grupoSelecionadoTermoReferencia.value = grupoSelected;
}
const currentIndex = computed(() => {
  return exibicaoTermoReferencia.value.grupos.findIndex(grupo => grupo === grupoSelecionadoTermoReferencia.value);
});

const isFirstGroup = computed(() => currentIndex.value === 0);
const isLastGroup = computed(() => currentIndex.value === exibicaoTermoReferencia.value.grupos.length - 1);

const navigateToPrevious = () => {
  if (currentIndex.value > 0) {
    grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[currentIndex.value - 1];
  }
};

const navigateToNext = () => {
  if (currentIndex.value < exibicaoTermoReferencia.value.grupos.length - 1) {
    grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[currentIndex.value + 1];
  }
};
</script>
<style scoped>
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
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
