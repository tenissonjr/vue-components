<template>
  <div class="container">
    <div class="row sticky-filters">
      <div class="col-6">
        <label for="pesquisa" class="mr-2">Filtro</label>
        <input type="text" id="pesquisa" class="form-control" v-model="pesquisa" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Atributo</th>
              <th>Tipo</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="listaValidacaoAtributos.length == 0">
              <td colspan="3" class="text-center">O Termo de Referência não possui nenhuma erro ou aviso.
              </td>
            </tr>
            <tr v-if="listaValidacaoAtributos.length > 0 && validacoesFiltradas.length === 0">
              <td colspan="3" class="text-center">Nenhuma validação encontrada com os critérios informados
              </td>
            </tr>
            <tr v-for="validacao in validacoesFiltradas" :key="validacao.descricaoGrupo">
              <td><a href=" #" @click="onGrupoSelecionado(validacao.descricaoGrupo)">{{
                validacao.descricaoAtributo }}</a>
              </td>
              <td>
                <a href=" #" @click="onGrupoSelecionado(validacao.descricaoGrupo)">
                  <Tag severity="danger" value="Danger">{{ validacao.tipo }}</Tag>
                </a>
              </td>
              <td><a href=" #" @click="onGrupoSelecionado(validacao.descricaoGrupo)">{{ validacao.mensagem }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import Tag from 'primevue/tag';

import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { listaValidacaoAtributos } = storeToRefs(termoReferenciaStore)

const pesquisa = ref('');


const validacoesFiltradas = computed(() => {
  const searchTerm = pesquisa.value.toLowerCase().trim();
  return listaValidacaoAtributos.value.filter(v =>
    v.descricaoAtributo.toLowerCase().includes(searchTerm)
  );
});

const onGrupoSelecionado = (descricaoGgrupo: string) => {
  termoReferenciaStore.selecionarGrupoPorDescricao(descricaoGgrupo);
};


</script>
<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
}

.sticky-filters {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}



.form-group {
  margin-bottom: 1rem;
}

.table {
  max-height: 300px;
  overflow-y: auto;
}
</style>
