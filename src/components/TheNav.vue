<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHoverEffectStore } from '@/stores/useHoverEffectStore'

const hoverEffectStore = useHoverEffectStore()
const linksContainer = ref(null) // Ref for the container holding links
let cleanupFunctions = [] // Array for cleanup callbacks

onMounted(() => {
  if (linksContainer.value) {
    // Select all RouterLink elements within the container
    const links = linksContainer.value.querySelectorAll('a')
    links.forEach((link) => {
      const cleanup = hoverEffectStore.applyHoverEffects(link)
      cleanupFunctions.push(cleanup)
    })
  }
})

onUnmounted(() => {
  // Cleanup all event listeners
  cleanupFunctions.forEach((cleanup) => cleanup())
})
</script>

<template>
  <div class="wrapper" ref="linksContainer">
    <nav>
      <RouterLink to="/question">Submit</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <!-- <RouterLink to="/profile">Profile</RouterLink> -->
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  align-items: flex-end;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
