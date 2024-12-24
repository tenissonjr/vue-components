<template>
  <div
    class="note-card"
    @click="handleClick(props.id)"
    :style="{ height: heightConfig.card }"
    :class="{ 'note-card--border': props.showBorder }"
    v-tooltip.bottom="{
      value: props.text,
      escape: false,
      disabled: !props.showTooltip,
    }"
  >
    <div class="content">
      <div class="image-container" :style="{ height: heightConfig.image }" v-if="props.showIcon">
        <img src="@/assets/sticky-note.png" class="image-note" alt="{{text}}" />
      </div>
      <div class="text-container" :style="{ height: heightConfig.text }" v-if="props.showText">
        <h1 class="title">
          <span v-html="textLimited"></span>
        </h1>
      </div>
      <div class="badge-container" :style="{ height: heightConfig.bagde }">
        <app-badge :text="title" :type="badgeType" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  showText: {
    type: Boolean,
    default: true,
  },

  showTooltip: {
    type: Boolean,
    required: false,
    default: true,
  },
  showBorder: {
    type: Boolean,
    required: false,
    default: false,
  },
  titleMaxLength: {
    type: Number,
    required: false,
    default: 60,
  },
})

interface HeightType {
  card: string
  image: string
  text: string
  bagde: string
}

const HEIGHT_CONSTANTS: Record<string, HeightType> = {
  'showImage:true-showText:true': {
    card: '150px',
    image: '40%',
    text: '40%',
    bagde: '20%',
  },
  'showImage:true-showText:false': {
    card: '110px',
    image: ' 60%',
    text: ' 0%',
    bagde: '40%',
  },
  'showImage:false-showText:true': {
    card: '110px',
    image: ' 0%',
    text: ' 60%',
    bagde: '40%',
  },
  'showImage:false-showText:false': {
    card: '55px',
    image: ' 0%',
    text: ' 0%',
    bagde: '100%',
  },
}

const heightConfig = computed(() => {
  return HEIGHT_CONSTANTS[`showImage:${props.showIcon}-showText:${props.showText}`]
})

const BADGE_CLASSES: { [key: string]: string } = {
  'nota explicativa': 'info',
  orientação: 'succes',
  normativo: 'warning',
  recomendação: 'danger',
  default: 'default',
}
const badgeType = computed(() => {
  const normalizedText = props.title.trim().toLowerCase()
  return BADGE_CLASSES[normalizedText] || BADGE_CLASSES['default']
})

const emit = defineEmits(['onClick'])

const handleClick = (id: number): void => {
  alert('Card clicked! : ' + id)
  emit('onClick')
}

const isTextLimited = computed((): boolean => {
  return props.text.length > props.titleMaxLength
})
const textLimited = computed((): string => {
  return isTextLimited.value ? `${props.text.substring(0, props.titleMaxLength)}...` : props.text
})
</script>

<style scoped>
.note-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 10px;
}

.note-card--border {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.image-container {
  flex: 1;
}
.text-container {
  flex: 1;
}
.badge-container {
  display: flex;
  justify-content: flex-end;
}
.title {
  margin: 0;
  color: rgb(70, 70, 70) !important;
  font-size: 13px !important;
}

.image-note {
  cursor: pointer;
  margin-bottom: 0.5rem;
  width: 50px;
  height: 50px;
}
</style>
