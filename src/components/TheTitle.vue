<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap } from 'gsap'

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const textElement = ref(null)

const handleMouseEnter = () => {
  if (textElement.value) {
    gsap.to(textElement.value, {
      duration: 0.3,
      fontVariationSettings: "'wght' 700, 'BACK' 700, 'RECT' 700, 'ELSH' 4",
    })
  }
}

const handleMouseLeave = () => {
  if (textElement.value) {
    gsap.to(textElement.value, {
      duration: 0.5,
      fontVariationSettings: "'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4",
    })
  }
}

onMounted(() => {
  if (textElement.value) {
    textElement.value.addEventListener('mouseenter', handleMouseEnter)
    textElement.value.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  if (textElement.value) {
    textElement.value.removeEventListener('mouseenter', handleMouseEnter)
    textElement.value.removeEventListener('mouseleave', handleMouseLeave)
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
.rounded-border {
  border: 2px solid black;
  border-radius: 20em;
  padding: 0px 50px;
  text-align: center;
  width: fit-content;
}
</style>
