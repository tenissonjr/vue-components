<template>
  <Timeline :value="props.events" :layout="props.layout" :align="props.align">
    <template #marker="slotProps">
      <span
        class="circle-icon"
        :style="{
          color: getIconColor(slotProps.item.color),
          backgroundColor: getIconBackgroundColor(slotProps.item.backgroundColor),
        }"
      >
        <i :class="slotProps.item.icon"></i>
      </span>
    </template>
    <template #content="slotProps">
      <Card class="mt-4">
        <template #title>
          {{ slotProps.item.status }}
        </template>
        <template #subtitle>
          {{ slotProps.item.date }}
        </template>
        <template #content>
          <p>{{ slotProps.item.content }}</p>
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<script setup lang="ts">
import type { IHistory } from '@/types/IHistory'
import Card from 'primevue/card'
import Timeline from 'primevue/timeline'
const props = defineProps<IHistory>()

const getIconColor = (color: string) => {
  return color || '#ffffff'
}
const getIconBackgroundColor = (color: string) => {
  return color || '#000000'
}
</script>
<style scoped>
.circle-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; /* Centraliza o texto dentro do ícone */
  line-height: 40px; /* Alinha verticalmente o ícone */
}

.circle-icon i {
  font-size: 20px; /* Tamanho do ícone */
  line-height: 1; /* Reseta o line-height do ícone */
  margin-top: -1px; /* Desloca o ícone um pouco para cima */
  margin-left: 1px; /* Desloca o ícone um pouco para a direita */
}
</style>
