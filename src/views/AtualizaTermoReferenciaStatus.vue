<template>
  Total de questionamentos respondidos : {{ value }} / {{ total }}
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(40);
const total = ref(100);
</script>
