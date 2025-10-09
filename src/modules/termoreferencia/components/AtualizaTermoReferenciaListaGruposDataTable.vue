<template>

  Selecionado => {{ selectedRow ? selectedRow.descricao : 'Nenhum selecionado' }}
  <DataTable :value="atualizacaoTermoReferencia.grupos" key="id" selectionMode="single" :rows="3" :paginator="true"
    :showGridlines="true" size="small" paginatorPosition="top" :resizableColumns="true" :filters="filtersDataTable"
    filterDisplay="row" :globalFilterFields="['descricao', 'ordenacao']" :metaKeySelection="metaKey"
    v-model:selection="selectedRow" @update:selection="mudaSelecionado()">
    <template #empty>
      Nenhum atributo encontrado com os critérios informados
    </template>
    <template #header>
      <div class="col-6">
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="filtersDataTable['global'].value" placeholder="" />
        </IconField>
      </div>
    </template>
    <Column field="descricao" header="Descrição">
      <template #body="{ data }">
        {{ data.descricao }}
      </template>
      <template #filter>
        <InputText type="text" v-model="filtersDataTable['descricao'].value" />
      </template>
    </Column>
    <Column>
      <template #body="{ data }">
        <grupo-termo-referencia-badges :grupoTermoReferencia="data" />
      </template>
    </Column>
  </DataTable>

</template>
<script setup lang="ts">
import GrupoTermoReferenciaBadges from '@/modules/termoreferencia/components/GrupoTermoReferenciaBadges.vue';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';
import { FilterMatchMode } from '@primevue/core/api';
import { storeToRefs } from 'pinia';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { ref, watch } from 'vue';

const selectedRow = ref();
const metaKey = ref(true);
const termoReferenciaStore = useTermoReferenciaStore();
const { atualizacaoTermoReferencia, grupoSelecionadoTermoReferencia } = storeToRefs(termoReferenciaStore)

const filtersDataTable = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  descricao: { value: null, matchMode: FilterMatchMode.CONTAINS },
});



watch(grupoSelecionadoTermoReferencia, (newVal, oldVal) => {
  console.log('grupoSelecionadoTermoReferencia mudou :', { de: oldVal.descricao, para: newVal.descricao });
  // Adicione aqui qualquer ação necessária quando o grupo selecionado mudar
  if (newVal) {
    selectedRow.value = newVal;
  } else {
    selectedRow.value = null;
  }
});

const mudaSelecionado = () => {
  if (selectedRow.value) {
    termoReferenciaStore.selecionarGrupoPorDescricao(selectedRow.value.descricao);
  }
};




</script>
<style scoped></style>
