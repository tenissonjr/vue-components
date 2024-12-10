<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10">
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
              :value="itemCard.value"
              :iconName="itemCard.iconName"
              :selected="itemCard.selected"
              @onCardSelected="selectCard"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDashCard } from '@/composables/DashCardComposable'

const { addCard, getSmallCards, selectCardByAlias } = useDashCard()

const selectCard = (alias: string): void => {
  selectCardByAlias(alias)
}

addCard({
  alias: 'trEmElaboracao',
  size: 'small',
  text: 'Em elaboração',
  value: 1,
  selected: false,
  iconName: 'bi bi-pencil-square',
})
addCard({
  alias: 'trCancelados',
  size: 'small',
  text: 'Cancelados',
  value: 1,
  selected: false,
  iconName: 'bi bi-x-circle',
})
addCard({
  alias: 'trEmAguardandoAnalise',
  size: 'small',
  text: 'Aguardando análise',
  value: 1,
  selected: false,
  iconName: 'bi bi-hourglass-split',
})
addCard({
  alias: 'trEmAnalise',
  size: 'small',
  text: 'Em análise',
  value: 2,
  selected: false,
  iconName: 'bi bi-zoom-in',
})
addCard({
  alias: 'trEmAguardandoRetificacao',
  size: 'small',
  text: 'Aguardando retificação',
  value: 2,
  selected: false,
  iconName: 'bi bi-exclamation-circle',
})
addCard({
  alias: 'trConcluidos',
  size: 'small',
  text: 'Concluídos',
  value: 14,
  selected: false,
  iconName: 'bi bi-check-circle',
})
addCard({
  alias: 'trsPublicados',
  size: 'small',
  text: 'Publicados',
  value: 11,
  selected: false,
  iconName: 'bi bi-newspaper',
})
</script>
