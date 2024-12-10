<template>
  <div
    :class="{ lightblue: selected, white: !selected }"
    @click="handleClick"
    class="card"
    :style="{ width: width, height: height }"
  >
    <div class="container">
      <div class="row">
        <div class="col-5 text-start">
          <p class="value" :class="{ valueSelected: selected }">{{ value }}</p>
        </div>
        <div class="col-7 text-end">
          <i class="icon" :class="iconName"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span class="title" :class="{ titleSelected: selected }">{{ text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },

  iconName: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: Number,
    required: false,
    default: 100,
  },
  width: {
    type: String,
    required: false,
    default: '100%',
  },
  height: {
    type: String,
    required: false,
    default: '300px',
  },
})

const emit = defineEmits(['update:selected', 'onClick'])

const selected = ref(props.selected)

watch(
  () => props.selected,
  (newVal) => {
    selected.value = newVal
  },
)

const handleClick = () => {
  selected.value = !selected.value
  emit('update:selected', selected.value)
  emit('onClick')
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.lightblue {
  background: linear-gradient(to bottom, #335ead, #4a85ec);
}
.white {
  background-color: white;
}
.icon {
  font-size: 45px;
  color: #8daee9;
}

.value {
  font-size: 30px;
  font-weight: bold;
}
.valueSelected {
  color: yellow;
}
.title {
  margin-top: 8px;
  font-size: 15px;
}
.titleSelected {
  color: white;
}
</style>
