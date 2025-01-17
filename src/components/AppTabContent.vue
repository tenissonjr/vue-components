<template>
  <TabPanel :value="value">
    <slot></slot>
  </TabPanel>
</template>
<script setup lang="ts">
import TabPanel from 'primevue/tabpanel';
defineProps({
  value: {
    type: Number,
    required: true,
  },
})

</script>


