<template>
  <Button type="button" icon="pi pi-share-alt" label="Atributos" @click="toggleTreeTable" />
  <Popover ref="treeTableRef">
    filters => {{ treeTableFilters }}
    <br>selectedKey = {{ selectedKey }}
    <div class="col-12">
      <TreeTable :value="exemploTermoReferenciaTreeNode.grupos" :filters="treeTableFilters" removableSort
        tableStyle="min-width: 50rem" :paginator="true" :showGridlines="true" :rows="5" size="small"
        selectionMode="single" v-model:selectionKeys="selectedKey">

        <Column field="descricao" sortable header="Descrição" expander>
          <template #filter>
            <InputText v-model="treeTableFilters['descricao']" type="text" placeholder="Filtro pela descrição" />
          </template>
        </Column>
        <Column field="ordenacao" sortable header="Ordenação" expander></Column>
      </TreeTable>
    </div>
  </Popover>
  <Button type="button" icon="pi pi-share-alt" label="Atributos Table" @click="toggleDataTable" />
  <Popover ref="dataTableRef">
    Selecionado => {{ selectedRow ? selectedRow.descricao : 'Nenhum selecionado' }}
    <DataTable :value="exemploTermoReferenciaCompleto.grupos" key="id" selectionMode="single" :rows="3"
      :paginator="true" :showGridlines="true" size="small" paginatorPosition="top" :resizableColumns="true"
      :filters="filtersDataTable" filterDisplay="row" :globalFilterFields="['descricao', 'ordenacao']"
      v-model:selectionKeys="selectedKey" v-model:selection="selectedRow">
      <template #header>
        <div class="flex justify-end">
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
          <InputText type="text" v-model="filtersDataTable['descricao'].value" placeholder="Search by name" />
        </template>
      </Column>
      <Column field="ordenacao" header="Ordenação">
      </Column>

    </DataTable>
  </Popover>
</template>
<script setup lang="ts">
import TreeTable from 'primevue/treetable';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import { ref } from 'vue';
import { exemploTermoReferenciaTreeNode } from '../types/IAtualizacaoTermoReferenciaTreeNodeDTO';
import { exemploTermoReferenciaCompleto } from '../types/IAtualizacaoTermoReferenciaDTO';
import Popover from 'primevue/popover';
import { FilterMatchMode } from '@primevue/core/api';

const selectedRow = ref();

const filtersDataTable = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  descricao: { value: null, matchMode: FilterMatchMode.CONTAINS },
});
const treeTableRef = ref();
const dataTableRef = ref();
const selectedKey = ref();
selectedKey.value = {
  '5.1': true, // Exemplo de chave selecionada
};
const toggleTreeTable = (event: MouseEvent) => {
  treeTableRef.value.toggle(event);
}
const toggleDataTable = (event: MouseEvent) => {
  dataTableRef.value.toggle(event);
}


const treeTableFilters = ref<{ [key: string]: string }>({});



</script>
<style scoped></style>
