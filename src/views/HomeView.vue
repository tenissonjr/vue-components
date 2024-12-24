<template>
  <div class="m-3 row">
    <notes-preview />
  </div>
  <dash-board />
  <div class="m-3 row">
    <select-products v-if="false" />
  </div>
</template>
<script setup lang="ts">
import DashBoard from './DashBoard.vue'
import SelectProducts from './SelectProducts.vue'
import NotesPreview from './NotesPreview.vue'
</script>
