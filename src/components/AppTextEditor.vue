<template>
  <Editor v-model="model" style="width: 95%;">
    <template v-slot:toolbar>
      <span class="ql-formats">
        <span class="ql-formats">
          <select class="ql-font"></select>
          <select class="ql-size"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-strike"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-clean"></button>
        </span>

        <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-header" value="1"></button>
          <button class="ql-header" value="2"></button>
          <button class="ql-header" value="3"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-indent" value="-1"></button>
          <button class="ql-indent" value="+1"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-direction" value="rtl"></button>
          <select class="ql-align"></select>
        </span>
      </span>
    </template>
  </Editor>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import Editor from 'primevue/editor'
const model = defineModel<string>()

const props = withDefaults(defineProps<{
  status?: 'Normal' | 'Erro' | 'Aviso';
}>(), {
  status: 'Normal'
});

const editorStyle = computed(() => {
  let backgroundColor;
  switch (props.status) {
    case 'Erro':
      backgroundColor = '#fcd2d2';
      break;
    case 'Aviso':
      backgroundColor = '#f5f5a7';
      break;
    default:
      backgroundColor = 'white';
  }
  return {
    '--p-editor-content-background': backgroundColor,
    /* height: '320px'*/
  };
});

</script>
<style scoped>
.ql-editor {
  height: 320px;
  background-color: #fcd2d2;
}
</style>
