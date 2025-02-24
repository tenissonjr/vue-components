<template>
      <div class="xcontainer row col-12" id="step1">
        <h1>Cadastramento de Termo de Referência</h1>
        <h2>Informe o Pedido de Aquisição do SIGMAS</h2>
        <div class="form-group col-6">
            <label for="numero-processo">Número do Processo</label>
            <input type="text" id="numero-processo">
        </div>
        <div class="form-group col-6">
            <label for="ano-processo">Ano de Processo</label>
            <input type="text" id="ano-processo">
        </div>
        <div class="form-group">
            <button id="pesquisar" @click="pesquisar">Pesquisar</button>
            <button id="limpar" @click="limpar">Limpar</button>
        </div>
        <table class="table" id="resultados">
            <thead>
                <tr>
                    <th></th>
                    <th>Processo (Ano/Número)</th>
                    <th>Objeto/Termo de Referência</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody v-if="exibirRessultadoPesquisa">
              <tr>
            <td><input type="radio" name="pedido" onclick="enableButton('avancar')"></td>
            <td>100/2020</td>
            <td>Compra de Equipamentos</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td >Termo de Tefererência 10/2020 -  (Cancelado)</td>
            <td><button onclick="detalharPedido('2025/001')">Detalhar</button></td>
        </tr>
        <tr>
            <td></td>
            <td ></td>
            <td >Termo de Tefererência 45/2022 -  (Publicado)</td>
            <td><button onclick="detalharPedido('2025/001')">Detalhar</button></td>
        </tr>


        <tr>
            <td><input type="radio" name="pedido" onclick="enableButton('avancar')"></td>
            <td>088/2025</td>
            <td>Serviços de Consultoria</td>
            <td></td>
        </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const exibirRessultadoPesquisa = ref(false);

const pesquisar = () => {
    exibirRessultadoPesquisa.value = true;
}

const limpar = () => {
    exibirRessultadoPesquisa.value = false;
}

</script>
