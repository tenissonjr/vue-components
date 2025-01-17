<template>
  <app-tabs :value="2" >
    <template #tab-buttons>
        <app-tab-button :value="1">Anotações</app-tab-button>
        <app-tab-button :value="2">Tipos de Capítulos</app-tab-button>
        <app-tab-button :value="3">3</app-tab-button>
        <app-tab-button :value="4">4</app-tab-button>
        <app-tab-button :value="5">5</app-tab-button>
        <app-tab-button :value="6">6</app-tab-button>
    </template>
    <template #tab-contents>
        <app-tab-content :value="1">
            Anotações
        </app-tab-content>
        <app-tab-content :value="2">
            Tipos de Capítulos
        </app-tab-content>
        <app-tab-content :value="3">
            3
        </app-tab-content>
        <app-tab-content :value="4">
            4
        </app-tab-content>
        <app-tab-content :value="5">
            5
        </app-tab-content>
        <app-tab-content :value="6">
            6
        </app-tab-content>
    </template>
  </app-tabs>
</template>
