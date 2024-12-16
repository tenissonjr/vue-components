<template>
  <div class="container-fluid fundo">
    <div v-if="false" class="row">
      <div class="col-6">
        <DataTable
          :value="products"
          v-model:selection="selectedProduct"
          v-model:filters="filters"
          tableStyle="min-width: 50rem"
          :globalFilterFields="['name']"
          :rows="100"
        >
          <template #header>
            <div class="flex justify-end">
              Filtro :
              <input
                type="text"
                v-model="filters['name'].value"
                placeholder="Informe filtro de pesquisa"
              />
            </div>
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column field="name" header="Name"></Column>
        </DataTable>
      </div>
      <div class="col-6">
        <OrderList v-model="selectedProduct" dataKey="id" :striped="true">
          <template #option="{ option }">
            {{ option.name }}
          </template>
        </OrderList>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <app-dual-select-list
          v-model="productsPick"
          propertyId="id"
          propertyName="name"
          striped
          @onModelUpdated="updated"
          height="10rem"
        />
        Selecionados : {{ productsPick[1].length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FilterMatchMode } from '@primevue/core/api'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import OrderList from 'primevue/orderlist'
import { onMounted, ref } from 'vue'
import type { Product } from './ProductServer'
import { ProductService } from './ProductServer'
const products = ref<Product[]>([])

const productsPick = ref<Product[][]>([[], []])

const selectedProduct = ref<Product[]>([])
const filters = ref({
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
})
onMounted(() => {
  ProductService.getProducts().then((data) => {
    products.value = data

    selectedProduct.value.push(products.value[0])
    selectedProduct.value.push(products.value[4])

    productsPick.value = [data, selectedProduct.value]
  })
})

const updated = (values: Product[][]): void => {
  console.log('Selecionados', values[1])
}
</script>
