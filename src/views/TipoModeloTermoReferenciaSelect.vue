<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10">
        <div class="row">
          <div class="col-12 col-xs-12 col-sm-6 col-md col-lg col-xl" v-for="itemCard in getLargeCards()"
            :key="itemCard.alias">
            <app-dash-card :alias="itemCard.alias" :size="itemCard.size" :legend="itemCard.legend" :info="itemCard.info"
              :iconName="itemCard.iconName" :selected="itemCard.selected" :value="itemCard.value"
              @onCardSelected="selectCard" @onCardDeselected="deselectCard" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-xs-12 col-sm-6 col-md col-lg col-xl" v-for="itemCard in getSmallCards()"
            :key="itemCard.alias">
            <app-dash-card :alias="itemCard.alias" :size="itemCard.size" :legend="itemCard.legend" :info="itemCard.info"
              :iconName="itemCard.iconName" :selected="itemCard.selected" :value="itemCard.value"
              @onCardSelected="selectCard" @onCardDeselected="deselectCard" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDashCard } from '@/composables/DashCardComposable'

const { addCard, getSmallCards, getLargeCards, selectCardByAlias, deselectCardByAlias } =
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
