<template>
  <Tab :value="value" :disabled="disabled">
    <slot></slot>
  </Tab>
</template>
<script setup lang="ts">
import Tab from 'primevue/tab';
defineProps({
  value: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})


</script>
