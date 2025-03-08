<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <dl>
          <dt>
            <h6>Processo</h6>
          </dt>
          <dd> {{ termoReferencia.processo }}</dd>
        </dl>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <dl>
          <dt>
            <h6>Número</h6>
          </dt>
          <dd><span data-testid="termoReferenciaNumero">{{ termoReferencia.numero }}</span></dd>
        </dl>
      </div>


      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <dl>
          <dt>
            <h6>Situação</h6>
          </dt>
          <dd>{{ termoReferencia.situacao }}</dd>
        </dl>
      </div>


      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 ">
        <dl>
          <dt>
            <h6>Descrição</h6>
          </dt>
          <dd> {{ termoReferencia.descricao }}</dd>
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
        <dd> {{ termoReferencia.unidade }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Responsável</h6>
        </dt>
        <dd> {{ termoReferencia.responsavel }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Finalidade</h6>
        </dt>
        <dd> {{ termoReferencia.finalidade }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Dt.Criação</h6>
        </dt>
        <dd> {{ termoReferencia.dataCriacao }}</dd>
      </dl>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
      <dl>
        <dt>
          <h6>Versão</h6>
        </dt>
        <dd> {{ termoReferencia.versao }}</dd>
      </dl>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ITermoReferenciaDTO } from '@/modules/termoreferencia/types/ITermoReferenciaDTO'


defineProps<{
  termoReferencia: ITermoReferenciaDTO
}>()



</script>
<style scoped>
dt {
  color: rgb(95, 90, 90);
}
</style>
