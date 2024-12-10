<template>
  <div @click="doSelectCard(props.alias)" :aria-describedby="alias">
    <div :class="[sizeCardClass, colorCardClass]">
      <div class="card_body">
        <div class="card_value" :class="valueClass">
          {{ value }}
        </div>
        <div class="card_icon">
          <i class="icon" :class="[iconClass, iconName]"></i>
        </div>
      </div>
      <div v-bind:class="sizeTextClass">
        <a
          aria-label="Teste de descrição"
          tabindex="0"
          href="#"
          :class="colorTextClass"
          @keydown.enter="doSelectCard(props.alias)"
        >
          <span :id="alias"><span v-html="text"></span></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IDashCard } from '@/types/IDashCard'
const props = defineProps<IDashCard>()

const emit = defineEmits(['onCardSelected'])

const doSelectCard = (alias: string): void => {
  emit('onCardSelected', alias)
}

const isLargeCard = computed((): boolean => props.size == 'large')

const sizeCardClass = computed((): string => (isLargeCard.value ? 'card--large' : 'card--small'))

const colorCardClass = computed((): string => (props.selected ? 'dashcard_selected' : 'dashcard'))

const valueClass = computed((): string => 'card_title--' + props.size)

const iconClass = computed((): string => 'icon--' + props.size)

const sizeTextClass = computed((): string => 'card_text--' + props.size)

const colorTextClass = computed(() => (props.selected ? 'card_text_selected' : 'card_text'))
</script>
<style>
/* Adicionando estilo para remover sublinhado dos links */
a {
  text-decoration: none;
  color: #000 !important;
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

.contadorPendencias_inativo:link {
  text-decoration: none !important;
}

.contadorPendencias_inativo {
  font-size: 2em !important;
  color: #0987b0 !important;
  text-decoration: none;
  font-style: normal !important;
  font-weight: 600 !important;
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

.card_value {
  position: absolute !important;
  left: 10px !important;
  top: 12px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 100% !important;
}
/*
.fcard__numero:hover,
.fcard__numero:focus {
  font-weight: bold;
  font-size: 32px;
  color: rgb(255, 255, 0) !important;
}
*/

.card_text {
  color: #000 !important;
  /*
  position: absolute !important;
  height: 32px !important;
  left: 10px !important;
  */
  font-style: normal !important;
  font-weight: 400 !important;
  /*
  line-height: 100% !important;
  letter-spacing: 0.02em !important;
  */
}

.card_text_selected {
  color: rgb(255, 255, 0) !important;
  /*
  position: absolute !important;
  height: 32px !important;
  left: 10px !important;
  */
  font-style: normal !important;
  /*
  font-weight: 400 !important;
  letter-spacing: 0.02em !important;
  line-height: 25px !important;
  */
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

/*
.card_text:hover,
.card_text:focus {
  color: #fff !important;
}
*/
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
