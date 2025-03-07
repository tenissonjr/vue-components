<template>
  <app-bread-crumb :links="[{ label: 'Gerenciar Termos de Referência', route: '/termosreferencia' }, { label: 'Atualizar Termo de Referência', route: '#' }]" />
  <app-page-header title="Atualizar Termo de Referência" />

  <div class="container">
    <div class="row">
      <div class="col-12">
        Dados do Termo de Referência
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        Lista de Atributos
      </div>
      <div class="col-7">
        Edição de Atributos
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore'
import type { IExibicaoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IExibicaoTermoReferenciaDTO'

//Criar variavel do tipo IExibicaoTermoReferenciaDTO com 30 elementos de grupos



</script>
