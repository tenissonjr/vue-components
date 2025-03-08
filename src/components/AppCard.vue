<template>
  <div class="card" :style="{ minHeight: cardHeight, maxHeight: cardHeight }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  cardHeight: {
    type: String,
    required: true,
    default: '400px',
  },
})
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0.5rem auto;
  width: 100%;
  overflow-y: auto;
}
</style>
