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
            <tr v-if="filteredGrupos.length === 0">
              <td colspan="2" class="text-center">Nenhum atributo encontrado com os critérios informados</td>
            </tr>
            <tr v-for="grupo in filteredGrupos" :key="grupo.descricao">
              <td>
                <a href="#" @click="handleClick(grupo)">{{ grupo.descricao }}</a>
              </td>
              <td><grupo-termo-referencia-badges :grupoTermoReferencia="grupo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IGrupoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IGrupoTermoReferenciaDTO'
import GrupoTermoReferenciaBadges from '@/modules/termoreferencia/components/GrupoTermoReferenciaBadges.vue'

const emit = defineEmits(['onSelected'])

const pesquisa = ref('');
const situacao = ref('');

const props = defineProps<{
  gruposTermoReferencia: IGrupoTermoReferenciaDTO[]
}>()

const filteredGrupos = computed(() => {
  const searchTerm = pesquisa.value.toLowerCase().trim();
  return props.gruposTermoReferencia.filter(grupo => {
    const matchesSearchTerm = grupo.descricao.toLowerCase().includes(searchTerm);
    const matchesSituacao = situacao.value === '' || (
      situacao.value === 'informados' && grupo.atributos.every(attr => attr.resposta && attr.resposta.trim() !== '')
    ) || (
        situacao.value === 'naoInformados' && grupo.atributos.some(attr => !attr.resposta || attr.resposta.trim() === '')
      );
    return matchesSearchTerm && matchesSituacao;
  });
});

const handleClick = (grupo: IGrupoTermoReferenciaDTO) => {
  emit('onSelected', grupo)
}
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

a {
  margin-left: 20px;
  margin-top: 10px;
  display: block;
}

li {
  cursor: pointer;
}
</style>
