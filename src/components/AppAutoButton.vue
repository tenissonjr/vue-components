<template>
  <SplitButton :label="buttonLabel" @click="triggerAction(false)" :model="items" style="width: 400px;" />

</template>

<script lang="ts" setup>
import SplitButton from 'primevue/splitbutton';
import { defineEmits, ref, onMounted, onBeforeUnmount, computed } from 'vue';

interface Props {
  label: string; // texto do botão
  seconds: number; // tempo em segundos para chamada automática

}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'onTriggerAction'): void
}>();

let intervalId: number | undefined;
let startTime: number;
const countDownEnabled = ref(true);

const elapsed = ref(0);

const items = computed(() => {
  return [
    {
      label: 'Habilitar acionamento automático',
      visible: (!countDownEnabled.value),
      command: () => {
        startAutoTrigger();
      }
    },
    {
      label: 'Desabilitar acionamento automático',
      visible: (countDownEnabled.value),
      command: () => {
        stopAutoTrigger();
      }
    }
  ]

});





const buttonLabel = computed(() => {
  const remaining = Math.max(0, Math.floor(props.seconds - elapsed.value));
  return countDownEnabled.value ? `${props.label} (${remaining}s)` : props.label;
});

const triggerAction = (auto = false) => {
  emit('onTriggerAction');
  if (countDownEnabled.value && auto) {
    startAutoTrigger();
  }
};

const startAutoTrigger = () => {
  stopAutoTrigger();
  countDownEnabled.value = true;
  console.log('Iniciando acionamento automático');
  elapsed.value = 0;
  startTime = Date.now();
  intervalId = window.setInterval(() => {
    elapsed.value = (Date.now() - startTime) / 1000;
    if (elapsed.value >= props.seconds) {
      triggerAction(true);
    }
  }, 100);
};

const stopAutoTrigger = () => {
  if (intervalId) {
    console.log('Parando acionamento automático');
    clearInterval(intervalId);
    intervalId = undefined;
  }
  countDownEnabled.value = false;
  elapsed.value = 0; // Zera o contador ao desabilitar
};

onMounted(() => {
  startAutoTrigger()
});

onBeforeUnmount(() => {
  stopAutoTrigger();
});


</script>
