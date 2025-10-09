<template>
  <PickList v-model="model" :dataKey="props.propertyId" :responsive="true" :striped="props.striped"
    @update:modelValue="doModelUpdate" :scrollHeight="props.height" :showSourceControls="props.showSourceControls"
    :showTargetControls="props.showTargetControls" :sourceListProps="{ ariaLabel: 'Available Items' }"
    @move-to-source="doMoveToSource" @move-all-to-source="doMoveAllToSource">
    <template v-if="props.sourceheader" #sourceheader>
      <span v-html="props.sourceheader"></span>
    </template>
    <template #option="{ option }">
      {{ option[props.propertyName] }}
    </template>
    <template v-if="props.targetheader" #targetheader>
      <span v-html="props.targetheader"></span>
    </template>
  </PickList>
</template>
<script setup lang="ts">
import PickList from 'primevue/picklist'
const model = defineModel<unknown[][]>()
const props = defineProps({
  propertyId: {
    type: String,
    required: true,
  },
  propertyName: {
    type: String,
    required: true,
  },
  sourceheader: {
    type: String,
    required: false,
  },
  targetheader: {
    type: String,
    required: false,
  },

  striped: {
    type: Boolean,
    required: false,
    default: false,
  },
  height: {
    type: String,
    required: false,
    default: '14rem',
  },
  showSourceControls: {
    type: Boolean,
    required: false,
    default: false,
  },
  showTargetControls: {
    type: Boolean,
    required: false,
    default: true,
  },
})

const doModelUpdate = (): void => {
  // Placeholder for future implementation
}

const doMoveToSource = (): void => {
  // Placeholder for future implementation
}

const doMoveAllToSource = (): void => {
  // Placeholder for future implementation
}
</script>
<style scoped>
.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {
  background: var(--p-listbox-option-selected-background);
  color: var(--p-listbox-option-selected-color);
}

.p-listbox-striped li:nth-child(even of .p-listbox-option) {
  background: var(--p-listbox-option-striped-background);
}
</style>
