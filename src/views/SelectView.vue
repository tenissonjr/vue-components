<template>
  <div>
    <Select v-model="selectedOption" :options="options" optionLabel="label" placeholder="Selecione uma opção">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center">
          <i :class="slotProps.value.icon" class="mr-2"></i>
          {{ slotProps.value.label }}
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex items-center">
          <i :class="slotProps.option.icon" class="mr-2"></i>
          {{ slotProps.option.label }}
        </div>
      </template>
    </Select>
  </div>
  selectedOption => {{ selectedOption }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import Select from 'primevue/select';

const options = [
  { label: 'Usuário logado', value: 'loggedUser', icon: 'pi pi-user' },
  { label: 'Todos os usuários', value: 'allUsers', icon: 'pi pi-users' }
];
const selectedOption = ref<string | null>(null);
</script>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>
