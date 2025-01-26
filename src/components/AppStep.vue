<template>
  <Step :value="value">
    <slot></slot>
  </Step>
</template>
<script setup lang="ts">
import Step from 'primevue/step';
defineProps({
  value: {
    type: Number,
    required: true,
  },
})


</script>
