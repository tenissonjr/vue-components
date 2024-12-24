<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10">
        <div class="row">
          <div
            class="col-12 col-xs-12 col-sm-6 col-md col-lg col-xl"
            v-for="itemCard in getLargeCards()"
            :key="itemCard.alias"
          >
            <app-dash-card
              :alias="itemCard.alias"
              :size="itemCard.size"
              :text="itemCard.text"
              :quantity="itemCard.quantity"
              :iconName="itemCard.iconName"
              :selected="itemCard.selected"
              :value="itemCard.value"
              @onCardSelected="selectCard"
              @onCardDeselected="deselectCard"
            />
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 col-xs-12 col-sm-6 col-md col-lg col-xl"
            v-for="itemCard in getSmallCards()"
            :key="itemCard.alias"
          >
            <app-dash-card
              :alias="itemCard.alias"
              :size="itemCard.size"
              :text="itemCard.text"
              :quantity="itemCard.quantity"
              :iconName="itemCard.iconName"
              :selected="itemCard.selected"
              :value="itemCard.value"
              @onCardSelected="selectCard"
              @onCardDeselected="deselectCard"
            />
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
/*
addCard({
  alias: 'trEmElaboracao',
  size: 'large',
  text: 'Em elaboração',
  quantity: 1,
  selected: false,
  iconName: 'bi bi-pencil-square',
  // value: { teste: 'teste' },
})
addCard({
  alias: 'trCancelados',
  size: 'large',
  text: 'Cancelados',
  quantity: 1,
  selected: false,
  iconName: 'bi bi-x-circle',
})
*/
addCard({
  alias: 'trEmAguardandoAnalise',
  size: 'small',
  text: 'Aguardando análise',
  quantity: 1,
  selected: false,
  iconName: 'bi bi-hourglass-split',
})
addCard({
  alias: 'trEmAnalise',
  size: 'small',
  text: 'Em análise',
  quantity: 2,
  selected: false,
  iconName: 'bi bi-zoom-in',
})
addCard({
  alias: 'trEmAguardandoRetificacao',
  size: 'small',
  text: 'Aguardando retificação',
  quantity: 2,
  selected: false,
  iconName: 'bi bi-exclamation-circle',
})
addCard({
  alias: 'trConcluidos',
  size: 'small',
  text: 'Concluídos',
  quantity: 14,
  selected: false,
  iconName: 'bi bi-check-circle',
})
addCard({
  alias: 'trsPublicados',
  size: 'small',
  text: 'Publicados',
  quantity: 11,
  selected: false,
  iconName: 'bi bi-newspaper',
})
</script>
