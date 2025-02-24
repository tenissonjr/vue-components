<template>
  <div class="container-fluid fundo">
    <div class="col-5">
            Selecione o tipo de Modelo de Termo de Referência
            <div class="row">

            <div class="col-12 " v-for="itemCard in getSmallCards()" :key="itemCard.alias">
              <app-dash-card :alias="itemCard.alias" :size="itemCard.size" :legend="itemCard.legend" :info="itemCard.info"
                :iconName="itemCard.iconName" :selected="itemCard.selected" :value="itemCard.value"
                @onCardSelected="selectCard" @onCardDeselected="deselectCard" />
            </div>
          </div>
    </div>
    <div class="col-7">
            ???????
    </div>

  </div>




</template>
<script setup lang="ts">
import { useDashCard } from '@/composables/DashCardComposable'

const { addCard, getSmallCards,  selectCardByAlias, deselectCardByAlias } =
  useDashCard()

const selectCard = (alias: string, value: object): void => {
  selectCardByAlias(alias)
  if (value) alert(value)
}
const deselectCard = (alias: string): void => {
  deselectCardByAlias(alias)
}

addCard({
  alias: 'trAquisicao',
  size: 'small',
  legend: 'Aquisição',
  info: '1',
  selected: false,
  iconName: 'bi bi-cart',
})
addCard({
  alias: 'trInformatização',
  size: 'small',
  legend: 'Informatização',
  info: '2',
  selected: false,
  iconName: 'bi bi-laptop',
})

addCard({
  alias: 'trContratacao',
  size: 'small',
  legend: 'Contratação',
  info: '1',
  selected: false,
  iconName: 'bi bi-file-earmark-text' //'bi bi-briefcase',
})
addCard({
  alias: 'trTerceirizacao',
  size: 'small',
  legend: 'Terceirização',
  info: '2',
  selected: false,
  iconName: 'bi bi-people-fill',
})
addCard({
  alias: 'trCredenciamento',
  size: 'small',
  legend: 'Credenciamento',
  info: '2',
  selected: false,
  iconName: 'bi bi-person-check',
})
addCard({
  alias: 'trNaoAplicavel',
  size: 'small',
  legend: 'Não Aplicável',
  info: '1',
  selected: false,
  iconName: 'bi bi-three-dots-vertical',
})
</script>
