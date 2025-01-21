<template>
  <div class="card flex justify-center">
    <MultiSelect
      v-model="model"
      :options="options"
      :optionLabel="optionLabel"
      :filter
      :placeholder="placeholder"
      :maxSelectedLabels="maxSelectedLabels"
    />
  </div>
</template>
<script setup lang="ts">
import MultiSelect from 'primevue/multiselect'
const model = defineModel<unknown[]>()
defineProps({
  options: {
    type: Array<unknown>,
    required: true,
  },
  optionLabel: {
    type: String,
    required: true,
  },
  filter: {
    type: Boolean,
    required: false,
    default: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  maxSelectedLabels: {
    type: Number,
    required: false,
  },
})
</script>
