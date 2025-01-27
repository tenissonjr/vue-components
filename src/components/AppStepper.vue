<template>
  <Card>
    <template #content>
      <Stepper :value="value" linear class="basis-[50rem]">
        <StepList>
          <slot name="steps-lists"></slot>
        </StepList>
        <StepPanels>
          <slot name="steps-panels"></slot>
        </StepPanels>
      </Stepper>
    </template>
  </Card>
</template>
<script setup lang="ts">
import Card from 'primevue/card';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';

defineProps({
  value: {
    type: Number,
    required: true,
  },
})

</script>
