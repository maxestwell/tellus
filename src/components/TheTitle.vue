<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHoverEffectStore } from '@/stores/useHoverEffectStore'

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const textElement = ref(null)
const hoverEffectStore = useHoverEffectStore()

let cleanupHoverEffects

onMounted(() => {
  if (textElement.value) {
    cleanupHoverEffects = hoverEffectStore.applyHoverEffects(textElement.value)
  }
})

onUnmounted(() => {
  if (cleanupHoverEffects) {
    cleanupHoverEffects()
  }
})
</script>

<template>
  <div class="wrapper">
    <RouterLink to="/">
      <h1 class="green rounded-border" ref="textElement">{{ title }}</h1>
    </RouterLink>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
}
.rounded-border {
  border: 2px solid black;
  border-radius: 20em;
  padding: 0px 50px;
  text-align: center;
  width: fit-content;
}
</style>
