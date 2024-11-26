<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue'
import { useHoverEffectStore } from '@/stores/hoverEffect'

// Define props for the component
const props = defineProps({
  defaultSettings: {
    type: String,
    required: true, // This ensures the prop must be passed
  },
  hoverSettings: {
    type: String,
    required: true, // This ensures the prop must be passed
  },
})

const { defaultSettings, hoverSettings } = toRefs(props)

const hoverEffectStore = useHoverEffectStore()
const hoverTarget = ref(null)
let cleanupHoverEffect

onMounted(() => {
  if (hoverTarget.value) {
    // Pass props to the hover effect store
    cleanupHoverEffect = hoverEffectStore.applyHoverEffects(
      hoverTarget.value,
      defaultSettings.value,
      hoverSettings.value,
    )
  }
})

onUnmounted(() => {
  if (cleanupHoverEffect) {
    cleanupHoverEffect()
  }
})
</script>

<template>
  <!-- Wrapper div for hover effect -->
  <div ref="hoverTarget">
    <!-- Slot for custom content -->
    <slot></slot>
  </div>
</template>
