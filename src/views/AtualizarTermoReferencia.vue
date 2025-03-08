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
        </app-card>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';

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


const handleGrupoSelecionado = (grupoSelected: IGrupoTermoReferenciaDTO) => {
  grupoSelecionadoTermoReferencia.value = grupoSelected;
}
</script>
