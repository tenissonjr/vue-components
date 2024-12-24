<template>
  <div class="container-fluid fundo">
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-10">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <app-note-item
              :id="1"
              title="Nota explicativa"
              text="Lorem ipsum <b>negrito</b> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              :show-tooltip="true"
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <app-note-item
              :id="2"
              title="Orientação"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <app-note-item
              :id="2"
              title="Normativo"
              text="Agora aqui tem muito mais texto inclusive em <b>negrito</b>."
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <app-note-item :id="2" size="small" text="Só isso mesmo." title="Recomendação" />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <app-note-item
              :id="8"
              title="Motivação"
              text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <app-note-item
              :id="9"
              title="Teste"
              text="For x -0 to print , Print x , primt mr, x, , mr , buc..da lulu, luluuuu.."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
