<template>
  <div @mouseover="onCardMouseOver" @mouseleave="onCardMouseLeave" @blur="onCardExit" :aria-describedby="alias">
    <div @click="doClick()" ref="divCard" :class="[sizeCardClass, colorCardClass]">
      <div class="card_body">
        <div class="card_quantity" :class="quantityClass">
          {{ info }}
        </div>
        <div class="card_icon">
          <i class="icon" :class="[iconClass, iconName]"></i>
        </div>
      </div>
      <div v-bind:class="sizeTextClass">
        <a ref="linkCard" tabindex="0" href="#" :class="colorTextClass" @focus="onCardEnter" @blur="onCardExit">
          <span :id="alias"><span v-html="legend"></span></span></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { IDashCard } from '@/types/IDashCard'
const props = defineProps<IDashCard>()

const emit = defineEmits(['onCardSelected', 'onCardDeselected'])
const linkCard = ref<HTMLElement | null>(null)
const divCard = ref<HTMLDivElement | null>(null)

const doClick = (): void => {
  //alert(props.alias)
  if (props.selected) {
    emit('onCardDeselected', props.alias, props.value)
  } else {
    emit('onCardSelected', props.alias, props.value)
  }
}

const onCardEnter = (): void => {
  divCard.value?.classList.add('card-enter')
}
const onCardExit = (): void => {
  divCard.value?.classList.remove('card-enter')
  divCard.value?.classList.remove('dashcard-hover')
}

const onCardMouseOver = (): void => {
  divCard.value?.classList.add('dashcard-hover')
}
const onCardMouseLeave = (): void => {
  divCard.value?.classList.remove('dashcard-hover')
}

const isLargeCard = computed((): boolean => props.size == 'large')

const sizeCardClass = computed((): string => (isLargeCard.value ? 'card--large' : 'card--small'))

const colorCardClass = computed((): string => (props.selected ? 'dashcard_selected' : 'dashcard'))

const quantityClass = computed((): string => 'card_title--' + props.size)

const iconClass = computed((): string => 'icon--' + props.size)

const sizeTextClass = computed((): string => 'card_text--' + props.size)

const colorTextClass = computed(() => (props.selected ? 'card_text_selected' : 'card_text'))
</script>
<style>
a {
  text-decoration: none;
  color: #000 !important;
}

.focus-border {
  outline: none;
  border-bottom: 2px dotted#8daee9;
}

.icon {
  color: #8daee9;
}

.icon--large {
  font-size: 75px;
}

.icon--small {
  font-size: 30px;
}

.dashcard {
  position: relative;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 0.5rem !important;
  margin-top: 0.8rem !important;
  margin-left: 0rem !important;
  overflow: hidden;
  padding: 5px;
}

.card-enter {
  opacity: 1 !important;
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 94.27%) !important;
  color: #fff !important;
}

.dashcard-hover {
  opacity: 1 !important;
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 94.27%) !important;
  color: #fff !important;
}

.dashcard_selected {
  position: relative;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem !important;
  margin-top: 0.8rem !important;
  margin-left: 0rem !important;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  background: linear-gradient(90deg, #4a5c70 0%, #128eb6 94.27%) !important;
  opacity: 1 !important;
}

.card--small {
  max-height: 7rem !important;
  min-height: 120px !important;
}

.card_icon {
  position: absolute;
  top: 10px;
  right: 5%;
  bottom: 70%;
}

.card_body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  position: relative;
}

.card_title {
  margin: 0 0 0.25rem 0;
  font-size: 24px;
}

.dashcard .card_title--large {
  font-size: 70px !important;
  color: #0987b0 !important;
}

.dashcard .card_title--small {
  font-size: 30px !important;
  color: #0987b0 !important;
}

.dashcard_selected .card_title--large {
  font-weight: bold;
  font-size: 70px !important;
  color: rgb(255, 255, 0) !important;
}

.dashcard_selected .card_title--small {
  font-size: 30px !important;
  color: rgb(255, 255, 0) !important;
}

.card_quantity {
  position: absolute !important;
  left: 10px !important;
  top: 12px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 100% !important;
}

.card_text {
  color: #000 !important;
  font-style: normal !important;
}

.card_text_selected {
  color: rgb(255, 255, 0) !important;
  font-style: normal !important;
}

.card_text--small {
  margin-top: 3em !important;
  margin-right: 5px;
  font-size: 18px;
  padding-bottom: 1em !important;
}

.card_text--large {
  margin-top: 4em !important;
  margin-left: 10px;
  font-size: 30px !important;
  padding-bottom: 1em !important;
}

.card--large {
  height: 15rem !important;
  margin-top: 0.7rem !important;
  margin-left: 0rem !important;
  color: #000 !important;
}
</style>
