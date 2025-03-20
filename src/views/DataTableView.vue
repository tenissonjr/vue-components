<template>

  <app-data-table :value="atributos"
  :columns="[
    { field: 'id', header: 'Id' },
    { field: 'descricao', header: 'Descrição', sortable: true  , filter:true}
]" />

</template>
<script setup lang="ts">

interface IAtributos {
  id: string;
  descricao: string;
}


const atributos: IAtributos[] = [
  { id: "1", descricao: "Objeto da contratação" },
  { id: "2", descricao: "Justificativa da necessidade" },
  { id: "3", descricao: "Fundamentação legal" },
  { id: "4", descricao: "Descrição detalhada do objeto" },
  { id: "5", descricao: "Especificações técnicas" },
  { id: "6", descricao: "Unidade de medida" },
  { id: "7", descricao: "Quantidade estimada" },
  { id: "8", descricao: "Prazos de entrega" },
  { id: "9", descricao: "Local de entrega" },
  { id: "10", descricao: "Forma de pagamento" },
  { id: "11", descricao: "Garantia exigida" },
  { id: "12", descricao: "Critérios de julgamento" },
  { id: "13", descricao: "Exigências de habilitação" },
  { id: "14", descricao: "Critérios de aceitabilidade" },
  { id: "15", descricao: "Requisitos de qualidade" },
  { id: "16", descricao: "Prazos contratuais" },
  { id: "17", descricao: "Sanções administrativas" },
  { id: "18", descricao: "Obrigações do contratado" },
  { id: "19", descricao: "Obrigações do contratante" },
  { id: "20", descricao: "Preço máximo aceitável" },
  { id: "21", descricao: "Planilha de custos" },
  { id: "22", descricao: "Origem dos recursos" },
  { id: "23", descricao: "Fiscalização do contrato" },
  { id: "24", descricao: "Segurança e sigilo de informações" },
  { id: "25", descricao: "Impacto ambiental" },
  { id: "26", descricao: "Capacitação e treinamento" },
  { id: "27", descricao: "Prazo de vigência do contrato" },
  { id: "28", descricao: "Possibilidade de prorrogação" },
  { id: "29", descricao: "Requisitos para rescisão" },
  { id: "30", descricao: "Disposições gerais" }
];







</script>
<style scoped>
.fdatatable-controls {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: start;
  align-items: flex-start;
  gap: 0.5rem;
}


.fdatatable-controls-search {
  width: auto;
}
</style>
