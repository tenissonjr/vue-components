<template>
  <DataTable
    :value="value"
    :stripedRows="stripedRows"
    :removableSort="removableSort"
    v-model:filters="filters"
    :paginator="showPaginator"
    :rows="rows"
    :rowsPerPageOptions="rowsPerPageOptions"
    :paginatorTemplate="paginatorTemplate"
    :currentPageReportTemplate="currentPageReportTemplate"
    v-bind="$attrs"
    :tableStyle="tableStyle"
  >
    <template v-if="filter" #header>
      <div  class="datatable-controls">
        <div class="datatable-controls-search">
          Pesquisar por:
          <InputText v-model="filters['global'].value" :placeholder="searchPlaceholder" />
        </div>
      </div>
    </template>

    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"
      :sortable="col.sortable?col.sortable:false">
      :filter="col.filter?col.filter:false"/>
    </Column>

    <template #empty>
      Nenhum registro encontrado.
    </template>

    </DataTable>
</template>

<script setup lang="ts">
import {  ref ,computed } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import type { IColumn } from './IColumn';
const props =defineProps({
  value: {
    type: Array,
    required: true,
  },
  stripedRows: {
    type: Boolean,
    default: true,
  },
  removableSort: {
    type: Boolean,
    default: true,
  },
  paginator: {
    type: Boolean,
    default: true,
  },
  filter: {
    type: Boolean,
    default: true,
  },

  rows: {
    type: Number,
    default: 10,
  },
  rowsPerPageOptions: {
    type: Array as () => number[],
    default: () => [5, 10, 20, 50],
  },
  paginatorTemplate: {
    type: String,
    default: 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown',
  },
  currentPageReportTemplate: {
    type: String,
    default: 'De {first} até {last} de {totalRecords} itens',
  },
  tableStyle: {
    type: String,
    default: 'min-width: 50rem',
  },
  searchPlaceholder: {
    type: String,
    default: 'Filtro de pesquisa',
  },
  columns: {
    type: Array as () => IColumn[],
    required: true,
  },

});

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});


const showPaginator = computed(() => props.paginator && props.value.length > props.rows);
</script>

<style scoped>
.datatable-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.datatable-controls-search {
  width: auto;
  margin-left: auto; /* Move o conteúdo para a direita */
}
</style>
