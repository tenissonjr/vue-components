<template>
  <app-history :events="history.events" :align="history.align"></app-history>
</template>
<script setup lang="ts">
import type { IHistory } from '@/types/IHistory'

const history: IHistory = {
  dataKey: '100',
  align: 'left',
  layout: 'vertical',
  events: [
    {
      status: 'Em elaboração',
      date: '15/10/2020 10:30',
      icon: 'bi bi-pencil-square',
      backgroundColor: '#cbd5e1',
      color: '#1e293b',

      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      status: 'Aguardando análise',
      date: '15/10/2020 14:00',
      icon: 'bi bi-hourglass-split',
      backgroundColor: '#6c757d',
    },

    {
      status: 'Em análise',
      date: '15/10/2020 14:00',
      icon: 'bi bi-zoom-in',
      backgroundColor: '#f97316',
    },
    {
      status: 'Aguardando retificação',
      date: '15/10/2020 16:15',
      icon: 'bi bi-exclamation-circle',
      backgroundColor: 'yellow',
      color: '#6c757d',
    },
    {
      status: 'Concluído',
      date: '15/10/2020 16:15',
      icon: 'bi bi-check-circle',
      backgroundColor: '#22c55e',
    },
    {
      status: 'Publicado',
      date: '15/10/2020 16:15',
      icon: 'bi bi-newspaper',
      backgroundColor: '#0ea5e9',
    },
  ],
}
</script>
