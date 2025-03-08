<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <dl>
          <dt>
            <h6>Processo</h6>
          </dt>
          <dd> {{ exibicaoTermoReferencia.termoReferencia.processo }}</dd>
        </dl>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <dl>
          <dt>
            <h6>Número</h6>
          </dt>
          <dd><span data-testid="termoReferenciaNumero">{{ exibicaoTermoReferencia.termoReferencia.numero }}</span></dd>
        </dl>
      </div>


      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <dl>
          <dt>
            <h6>Situação</h6>
          </dt>
          <dd>{{ exibicaoTermoReferencia.termoReferencia.situacao }}</dd>
        </dl>
      </div>


      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 ">
        <dl>
          <dt>
            <h6>Descrição</h6>
          </dt>
          <dd> {{ exibicaoTermoReferencia.termoReferencia.descricao }}</dd>
        </dl>
      </div>


    </div>
  </div>
  <div v-if="false" class="row">
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Unidade</h6>
        </dt>
        <dd> {{ exibicaoTermoReferencia.termoReferencia.unidade }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Responsável</h6>
        </dt>
        <dd> {{ exibicaoTermoReferencia.termoReferencia.responsavel }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Finalidade</h6>
        </dt>
        <dd> {{ exibicaoTermoReferencia.termoReferencia.finalidade }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Dt.Criação</h6>
        </dt>
        <dd> {{ exibicaoTermoReferencia.termoReferencia.dataCriacao }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Versão</h6>
        </dt>
        <dd> {{ exibicaoTermoReferencia.termoReferencia.versao }}</dd>
      </dl>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { ITermoReferenciaDTO } from '@/modules/termoreferencia/types/ITermoReferenciaDTO'
import { useTermoReferenciaStore } from '@/modules/termoreferencia/store/TermoReferenciaStore';

const termoReferenciaStore = useTermoReferenciaStore();
const { exibicaoTermoReferencia } = storeToRefs(termoReferenciaStore)


</script>
<style scoped>
dt {
  color: rgb(95, 90, 90);
}
</style>
