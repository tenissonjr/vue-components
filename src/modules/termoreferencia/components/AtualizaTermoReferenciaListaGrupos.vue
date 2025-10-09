<template>
  <div class="container">
    <div class="row sticky-filters">
      <div class="col-6">
        <label for="pesquisa" class="mr-2">Filtro</label>
        <input type="text" id="pesquisa" class="form-control" v-model="pesquisa" />
      </div>
      <div class="col-6">
        <label for="situacao" class="mr-2">Situação</label>
        <select id="situacao" class="form-control" v-model="situacao">
          <option value="">Todas</option>
          <option value="informados">Informados</option>
          <option value="naoInformados">Não informados</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-striped">
          <tbody>
            <tr v-if="gruposFiltrados.length === 0">
              <td colspan="2" class="text-center">Nenhum atributo encontrado com os critérios informados</td>
            </tr>
            <tr v-for="grupo in gruposFiltrados" :key="grupo.descricao"
              :class="{ 'selected': grupo.descricao === grupoSelecionadoTermoReferencia.descricao }">
              <template v-if="grupo.atributos.length > 0">
                <td>

                  <a href=" #" @click="onGrupoSelecionado(grupo)"><span
                      v-html="'&nbsp;'.repeat(grupo.nivel * 2)"></span>{{ grupo.ordenacaoHierarquica }}. {{
                        grupo.descricao
                      }}</a>
                </td>
                <td><grupo-termo-referencia-badges :grupoTermoReferencia="grupo" /></td>
              </template>
              <template v-else>
                <td>

                  <span v-html="'&nbsp;'.repeat(grupo.nivel * 2)"></span>{{ grupo.ordenacaoHierarquica }}.
                  {{
                    grupo.descricao }}
                </td>
                <td></td>

              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia'
import type { IGrupoTermoReferenciaFlatDTO } from '@/modules/termoreferencia/types/IGrupoTermoReferenciaFlatDTO'
import GrupoTermoReferenciaBadges from '@/modules/termoreferencia/components/GrupoTermoReferenciaBadges.vue'

import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { grupoSelecionadoTermoReferencia, flatGrupos } = storeToRefs(termoReferenciaStore)

const pesquisa = ref('');
const situacao = ref('');


const gruposFiltrados = computed(() => {
  const searchTerm = pesquisa.value.toLowerCase().trim();
  return flatGrupos.value.filter(grupo => {
    const matchesSearchTerm = grupo.descricao.toLowerCase().includes(searchTerm);
    const matchesSituacao = situacao.value === '' || (
      situacao.value === 'informados' && grupo.atributos.every(attr => attr.resposta && attr.resposta.trim() !== '')
    ) || (
        situacao.value === 'naoInformados' && grupo.atributos.some(attr => !attr.resposta || attr.resposta.trim() === '')
      );
    return matchesSearchTerm && matchesSituacao;
  });
});

const onGrupoSelecionado = (grupo: IGrupoTermoReferenciaFlatDTO) => {
  termoReferenciaStore.selecionarGrupo(grupo);
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


li {
  cursor: pointer;
}

.selected {
  background-color: #d3d3d3;
  /* Light gray background for selected row */
  font-weight: bold;
  /* Bold text for selected row */
}
</style>
