<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="m-3 row" v-if="false">
        <notes-preview />
      </div>
      <dash-board v-if="false" />
      <div class="m-3 row">
        <select-products v-if="false" />
      </div>
      <div class="m-3 row" v-if="false">
        <text-editor />
      </div>

      <div class="m-3 row" v-if="false">
        <hystory-view />
      </div>

      <div class="m-3 row" >
        <tabs-view />
      </div>


    </div>
  </div>
</template>
<script setup lang="ts">
import DashBoard from './DashBoard.vue'
import SelectProducts from './SelectProducts.vue'
import NotesPreview from './NotesPreview.vue'
import TextEditor from './TextEditor.vue'
import HystoryView from './HystoryView.vue'
import TabsView from './TabsView.vue'
</script>
