<template>
  <div ref="divCard" @click="doClick(props.alias, props.value)" :aria-describedby="alias">
    <div :class="[sizeCardClass, colorCardClass]">
      <div class="card_body">
        <div class="card_quantity" :class="quantityClass">
          {{ quantity }}
        </div>
        <div class="card_icon">
          <i class="icon" :class="[iconClass, iconName]"></i>
        </div>
      </div>
      <div v-bind:class="sizeTextClass">
        <a
          ref="linkCard"
          tabindex="0"
          href="#"
          :class="colorTextClass"
          @focus="onLinkEnter"
          @blur="onLinkExit"
          @keydown.enter="doClick(props.alias, props.value)"
        >
          <span :id="alias"><span v-html="text"></span></span
        ></a>
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

const doClick = (alias: string, value: object): void => {
  if (props.selected) {
    emit('onCardDeselected', alias, value)
  } else {
    emit('onCardSelected', alias, value)
  }
}

const onLinkEnter = (): void => {
  linkCard.value?.classList.add('focus-border')
}
const onLinkExit = (): void => {
  linkCard.value?.classList.remove('focus-border')
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
  font-size: 65px;
}

.icon--small {
  font-size: 25px;
}

.ativado {
  opacity: 1 !important;
  background: linear-gradient(90deg, #4a5c70 0%, #128eb6 94.27%) !important;
  color: #fff !important;
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

.dashcard:hover,
.dashcard:focus {
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

/* Card Grande Ativo */
.dashcard_selected .card_title--large {
  font-weight: bold;
  font-size: 55px !important;
  color: rgb(255, 255, 0) !important;
}

/* Card Grande não Ativo */
.dashcard .card_title--large {
  font-size: 50px !important;
  color: #0987b0 !important;
}

/* Card Pequeno não Ativo */
.dashcard .card_title--small {
  font-size: 24px !important;
  color: #0987b0 !important;
}

/* Card Pequeno Ativo */
.dashcard_selected .card_title--small {
  font-size: 26px !important;
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
  font-weight: 400 !important;
}

.card_text_selected {
  color: rgb(255, 255, 0) !important;
  font-style: normal !important;
}

.card_text_pendencias--large {
  margin-top: 1em !important;
  font-size: 20px !important;
  padding-bottom: 1em !important;
  padding-right: 6em !important;
}

.card_text--small {
  margin-top: 4em !important;
  font-size: 1em !important;
  padding-bottom: 1em !important;
  line-height: 18px !important;
  margin-right: 5px;
}

.card_text--large {
  margin-top: 8em !important;
  font-size: 20px !important;
  padding-bottom: 1em !important;
  margin-left: 10px;
}

.card_text:last-child {
  margin-bottom: 0;
}

.card--large {
  height: 15rem !important;
  margin-top: 0.7rem !important;
  margin-left: 0rem !important;
  color: #000 !important;
}

#imgCardMaior {
  float: right;
  filter: invert(100%);
}

#contadorCardMaior {
  float: left;
  font-size: 3.5em;
}

@media (min-width: 1343px) {
  .card_text--small {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (max-width: 1343px) {
  .card_title--small {
    font-size: 6rem;
  }

  .card_text--small {
    font-size: 14px !important;
    line-height: 16px !important;
  }
}

@media (max-width: 1150px) {
  .card_title--small {
    font-size: 2.5rem;
  }
  .card_text--small {
    font-size: 14px !important;
    line-height: 15px !important;
  }
}

@media (max-width: 1024px) {
  .card_body {
    padding: 0.25rem 0.25rem;
  }

  .card_text--small {
    font-size: 14px !important;
    line-height: 14px !important;
    margin-top: 55px !important;
  }
}

@media (max-width: 992px) {
  .card--large {
    height: 60vh;
  }
  .card--small {
    height: calc(20vh - 0.75rem);
  }
  .card_body {
    padding: 0.5rem 0.5rem;
  }
  .card_title {
    font-size: 24px;
  }
  .card_title--large {
    font-size: 16rem;
  }
  .card_text--small {
    font-size: 14px !important;
    line-height: 14px !important;
    margin-top: 60px !important;
  }
}

@media (max-width: 767px) {
  .card_icon {
    height: 50%;
  }
  .card--small .card_icon {
    height: 20%;
  }
  .vertical .card_icon {
    height: auto;
    width: 15%;
  }
  .vertical .card_text {
    font-size: 24px;
  }
  .card_text--small {
    font-size: 16px !important;
    line-height: 16px !important;
    margin-top: 48px !important;
  }
}

@media (max-width: 576px) {
  .card_icon {
    height: 50%;
  }
  .card--small .card_icon {
    height: 20%;
  }
  .vertical .card_icon {
    height: auto;
    width: 15%;
  }
  .vertical .card_text {
    font-size: 24px;
  }
  .card_text--small {
    font-size: 16px !important;
    line-height: 16px !important;
    margin-top: 50px !important;
  }
}
</style>
