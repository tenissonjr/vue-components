<template>
  <StepPanel v-slot="{ activateCallback }" :value="value">
    <slot></slot>

    <div v-if="showButtons" class="button-container">
      <Button v-if="priorPanel" :label="priorPanel" severity="secondary" icon="pi pi-arrow-left" class="button-spacing"
        @click="activateCallback(priorPanelNumber)" rounded />
      <Button v-if="nextPanel" :label="nextPanel" icon="pi pi-arrow-right" iconPos="right" class="button-spacing"
        @click="activateCallback(nextPanelNumber)" rounded />
    </div>
  </StepPanel>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  priorPanel: {
    type: String,
    required: false,
  },
  nextPanel: {
    type: String,
    required: false,
  },

})
const showButtons = computed(() => (props.priorPanel !== undefined && props.priorPanel !== '') || (props.nextPanel !== undefined && props.nextPanel !== ''));

const priorPanelNumber = computed(() => props.value - 1);
const nextPanelNumber = computed(() => props.value + 1);



</script>

<style scoped>
.button-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.button-spacing {
  margin: 0 25px;
}
</style>
