<template>
  <div @click="novoClick">
    <router-link :to="idCard" v-if="idCard != 'documentos'">
      <div :class="'card--' + modificador + ' ' + classCardAtivo" :id="idCard">
        <div class="card__body">
          <div class="card__numero" :tipoInfo="tipoInfo" :class="'card__title--' + modificador">
            {{ numero }}
          </div>
          <div class="card__icon">
            <b-img :src="icone" alt=""></b-img>
          </div>
        </div>
        <div v-bind:class="'card__text--' + modificador + ' ' + cardTextAtivo">
          <span v-html="texto"></span>
        </div>
      </div>
    </router-link>

    <div v-else>
      <div :class="'card--' + modificador + ' ' + classCardAtivo" :id="idCard">
        <div v-bind:class="'card__text_pendencias--' + modificador + ' ' + cardTextAtivo">
          <span v-html="texto"></span>
        </div>

        <div class="card__body">
          <div class="card__icon">
            <b-img :src="icone" alt=""></b-img>
          </div>
        </div>

        <div id="divRouterLInk">
          <router-link :to="objCardPendencias[0].idCard">
            <div id="minhasPendencias">
              <span v-bind:class="'contadorPendencias_' + ativo">
                {{ objCardPendencias[0].ctdCard }}</span
              >
              <span v-bind:class="'descricaoPendencias_' + ativo">{{
                objCardPendencias[0].titleCard
              }}</span>
            </div>
          </router-link>
          <router-link :to="objCardPendencias[1].idCard">
            <div id="pendenciasUts">
              <span v-bind:class="'contadorPendencias_' + ativo">
                {{ objCardPendencias[1].ctdCard }}</span
              >
              <span v-bind:class="'descricaoPendencias_' + ativo">{{
                objCardPendencias[1].titleCard
              }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DashCard',

  data() {
    return {
      //Garante o card selecionado no carregamento da pagina, caso refresh ou f5
      cardMinhasPendencias: '/documentos-pendentes' === this.$route.path,
      cardpendenciasMinhasUts: '/documentos-pendentes-uts' === this.$route.path,
      demaisCards: this.idCard === this.$route.path,
      classCardAtivo: this.idCard === this.$route.path ? 'dashcard_ativo' : 'dashcard',
      cardTextAtivo: this.idCard === this.$route.path ? 'card__text_ativo' : 'card__text',
      ativo: this.idCard === this.$route.path ? 'ativo' : 'inativo',
    }
  },

  watch: {
    $route(to, from) {
      this.classCardAtivo = 'dashcard'
      this.cardTextAtivo = 'card__text'
      this.ativo = 'inativo'

      if (this.objCardPendencias) {
        if (
          this.objCardPendencias[0].idCard === this.$route.path ||
          this.objCardPendencias[1].idCard === this.$route.path
        ) {
          this.classCardAtivo = 'dashcard_ativo'
          this.cardTextAtivo = 'card__text_ativo'
          this.ativo = 'ativo'
        }
      }

      if (this.idCard === this.$route.path) {
        this.classCardAtivo = 'dashcard_ativo'
        this.cardTextAtivo = 'card__text_ativo'
        this.ativo = 'ativo'
      }
    },
  },

  props: ['texto', 'numero', 'modificador', 'icone', 'tipoInfo', 'idCard', 'objCardPendencias'],

  computed: {
    ...mapGetters(['cardSelecionado', 'mostrarAlertaDestaque']),
  },

  methods: {
    novoClick() {
      this.$emit('atualizaDashboard')
    },

    ...mapActions(['obterNovoCard', 'desativaAlertaDestaque']),
  },
}
</script>
<style>
.link_card {
  text-decoration: none;
}

.ativado {
  opacity: 1 !important;
  /* background: #173010 !important; */
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
  /* box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25); */
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 0.5rem !important;
  margin-top: 0.8rem !important;
  margin-left: 0rem !important;
  overflow: hidden;
  padding: 5px;
}
.ativado {
  opacity: 1 !important;
  background: linear-gradient(90deg, #4a5c70 0%, #128eb6 94.27%) !important;
}
.dashcard:hover,
.dashcard:focus {
  /* box-shadow: 0 8px 24px rgb(149 157 165 / 20%); */
  opacity: 1 !important;
  background: linear-gradient(90deg, #4a5c70 0%, #128eb6 94.27%) !important;
  color: #fff !important;
}
.dashcard_ativo {
  position: relative;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  /*background-color: #fff;
  background-clip: border-box;
  */
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

#divRouterLInk {
  padding-top: 4.2rem !important;
  padding-left: 1.4rem;
  padding-bottom: 1rem;
}

.contadorPendencias_ativo {
  font-size: 2em !important;
  color: rgb(255, 255, 0) !important;
  font-weight: bold;
  text-decoration: none;
  font-style: normal !important;
  font-weight: 600 !important;
  /*line-height: 100%!important;*/
}

.contadorPendencias_ativo:link {
  text-decoration: none !important;
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
  /*line-height: 100%!important;*/
}
.descricaoPendencias_ativo {
  font-size: 1.2em !important;
  padding-left: 0.3rem;
  padding-right: 4.3rem;
  position: absolute !important;
  text-decoration: none;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  line-height: 25px !important;
  letter-spacing: 0.02em !important;
  margin-top: 0.9em !important;
  font-weight: bold;
}

.descricaoPendencias_inativo:hover,
.descricaoPendencias_inativo:focus {
  color: #fff !important;
}
.descricaoPendencias_inativo {
  font-size: 1.2em !important;
  padding-left: 0.3rem;
  padding-right: 4.3rem;
  position: absolute !important;
  text-decoration: none;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  line-height: 25px !important;
  letter-spacing: 0.02em !important;
  margin-top: 0.8em !important;
  color: #000 !important;
}

.card--small {
  height: 7rem;
}

.card__icon {
  position: absolute;
  /* height: 50%; */
  top: 10px;

  right: 5%;
  /*filter: invert(50%);*/
  bottom: 70%;
}

.card--small {
  /*    max-width: 22rem!important;*/
  max-height: 7rem !important;
  min-height: 120px !important;
}

.card__main-image {
  transition: all 0.3s ease-in-out;
}

.card__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  position: relative;
}

.card__title {
  margin: 0 0 0.25rem 0;
  font-size: 24px;
}

/* Card Grande Ativo */
.dashcard_ativo .card__title--large {
  font-weight: bold;
  font-size: 55px !important;
  color: rgb(255, 255, 0) !important;
}

/* Card Grande não Ativo */
.dashcard .card__title--large {
  font-size: 50px !important;
  color: #0987b0 !important;
}

/* Card Pequeno não Ativo */
.dashcard .card__title--small {
  font-size: 24px !important;
  color: #0987b0 !important;
}

/* Card Pequeno Ativo */
.dashcard_ativo .card__title--small {
  font-size: 26px !important;
  color: rgb(255, 255, 0) !important;
}

.card__numero {
  position: absolute !important;
  left: 10px !important;
  top: 12px !important;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 100% !important;
}

.fcard__numero:hover,
.fcard__numero:focus {
  font-weight: bold;
  font-size: 32px;
  color: rgb(255, 255, 0) !important;
}

.card__text {
  color: #000 !important;
  position: absolute !important;
  height: 32px !important;
  left: 10px !important;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 100% !important;
  letter-spacing: 0.02em !important;
  line-height: 25px !important;
}

.card__text_ativo {
  color: #fff !important;
  position: absolute !important;
  height: 32px !important;
  left: 10px !important;
  font-family: 'Roboto' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 100% !important;
  letter-spacing: 0.02em !important;
  line-height: 25px !important;
}

.card__text_pendencias--large {
  margin-top: 1em !important;
  font-size: 20px !important;
  padding-bottom: 1em !important;
  padding-right: 6em !important;
}

.card__text--small {
  margin-top: 4em !important;
  font-size: 1em !important;
  padding-bottom: 1em !important;
  line-height: 18px !important;
  margin-right: 5px;
}

.card__text--large {
  margin-top: 8em !important;
  font-size: 20px !important;
  padding-bottom: 1em !important;
  margin-left: 10px;
}

.card__text:hover,
.card__text:focus {
  color: #fff !important;
}

.card__text:last-child {
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

/* Medium devices (desktops, 992px and up) */

@media (min-width: 1343px) {
  .descricaoPendencias_ativo {
    font-size: 16px !important;
    line-height: 16px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 16px !important;
    line-height: 16px !important;
  }
  .card__text--small {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (max-width: 1343px) {
  .card__title--small {
    font-size: 6rem;
  }

  .card__text--small {
    font-size: 14px !important;
    line-height: 16px !important;
  }

  .descricaoPendencias_ativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
}

@media (max-width: 1150px) {
  .card__title--small {
    font-size: 2.5rem;
  }
  .card__text--small {
    font-size: 14px !important;
    line-height: 15px !important;
  }
  .descricaoPendencias_ativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
}

@media (max-width: 1024px) {
  .card__body {
    padding: 0.25rem 0.25rem;
  }
  .descricaoPendencias_ativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
  .card__text--small {
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
  .card__body {
    padding: 0.5rem 0.5rem;
  }
  .card__title {
    font-size: 24px;
  }
  .card__title--large {
    font-size: 16rem;
  }
  .descricaoPendencias_ativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 15px !important;
    line-height: 16px !important;
  }
  .card__text--small {
    font-size: 14px !important;
    line-height: 14px !important;
    margin-top: 60px !important;
  }
}

@media (max-width: 767px) {
  .card__icon {
    height: 50%;
  }
  .card--small .card__icon {
    height: 20%;
  }
  .vertical .card__icon {
    height: auto;
    width: 15%;
  }
  .vertical .card__text {
    font-size: 24px;
  }
  .descricaoPendencias_ativo {
    font-size: 16px !important;
    line-height: 18px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 16px !important;
    line-height: 18px !important;
  }
  .card__text--small {
    font-size: 16px !important;
    line-height: 16px !important;
    margin-top: 48px !important;
  }
}

@media (max-width: 576px) {
  .card__icon {
    height: 50%;
  }
  .card--small .card__icon {
    height: 20%;
  }
  .vertical .card__icon {
    height: auto;
    width: 15%;
  }
  .vertical .card__text {
    font-size: 24px;
  }
  .descricaoPendencias_ativo {
    font-size: 16px !important;
    line-height: 18px !important;
  }
  .descricaoPendencias_inativo {
    font-size: 16px !important;
    line-height: 18px !important;
  }

  .card__text--small {
    font-size: 16px !important;
    line-height: 16px !important;
    margin-top: 50px !important;
  }
}
</style>
