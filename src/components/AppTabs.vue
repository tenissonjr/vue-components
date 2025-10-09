<template>
  <Tabs :value="value" :scrollable="true">
    <TabList>
      <slot name="tab-buttons"></slot>
    </TabList>
    <TabPanels>
      <slot name="tab-contents"></slot>
    </TabPanels>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import TabPanels from 'primevue/tabpanels';

defineProps({
  value: {
    type: Number,
    required: true,
  },
})
</script>
