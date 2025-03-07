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
        <atualiza-termo-referencia-lista-grupos :gruposTermoReferencia="exibicaoTermoReferencia.grupos"
          @onSelected="handleGrupoSelecionado" />
      </div>
      <div class="col-8">
        <template v-for="atributo in grupoSelecionadoTermoReferencia.atributos" :key="atributo.id">
          <atualiza-termo-referencia-atualiza-atributo :atributoTermoReferenciaDTO="atributo" />
        </template>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';

import type { IExibicaoTermoReferenciaDTO } from '@/views/types/IExibicaoTermoReferenciaDTO';
import exemploTermoReferencia from '@/views/types/IExibicaoTermoReferenciaDTO';
import type { IGrupoTermoReferenciaDTO } from '@/views/types/IGrupoTermoReferenciaDTO';
import AtualizaTermoReferenciaAtualizaAtributo from './AtualizaTermoReferenciaAtualizaAtributo.vue';
import AtualizaTermoReferenciaDetalhes from './AtualizaTermoReferenciaDetalhes.vue';
import AtualizaTermoReferenciaListaGrupos from './AtualizaTermoReferenciaListaGrupos.vue';

const exibicaoTermoReferencia = ref<IExibicaoTermoReferenciaDTO>(exemploTermoReferencia)

const grupoSelecionadoTermoReferencia = ref<IGrupoTermoReferenciaDTO>({
  descricao: '',
  atributos: []
})


const handleGrupoSelecionado = (grupoSelected: IGrupoTermoReferenciaDTO) => {
  grupoSelecionadoTermoReferencia.value = grupoSelected;
}
</script>
