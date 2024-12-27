<template>
  <div class="m-3">
    <app-text-editor v-model="text" />
  </div>
  <div class="m-3">
    <span v-html="text"></span>
  </div>
  {{ text }}
</template>
<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Edição de texto  com o componente <b>app-text-editor</b> !')
</script>
