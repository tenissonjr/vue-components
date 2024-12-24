<template>
  <div class="badge" :class="type">{{ text }}</div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    validator: (value: string) => {
      const validValues = ['succes', 'warning', 'danger', 'info', 'secondary', 'default']
      return validValues.includes(value)
    },
    default: 'default',
  },
})
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  width: 100px;
  font-size: 75%;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 9px;
  margin-top: 0.5em;
  height: 25px;
}

.info {
  background-color: #0ea5e9;
  color: #ffffff;
}

.succes {
  background-color: #22c55e;
  color: #ffffff;
}

.warning {
  background-color: #f97316;
  color: #ffffff;
}

.danger {
  background-color: #ef4444;
  color: #ffffff;
}
.secondary {
  background-color: #6c757d;
  color: #ffffff;
}

.default {
  background-color: #cbd5e1;
  color: #1e293b;
}
</style>
