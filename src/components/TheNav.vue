<script setup>
import HoverEffect from '@/components/HoverEffect.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (paths) => {
  return paths.includes(route.path)
}
</script>

<template>
  <nav>
    <RouterLink to="/about">
      <HoverEffect
        class="nav-text"
        defaultSettings="'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4"
        hoverSettings="'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4"
      >
        About
      </HoverEffect>
    </RouterLink>
    <RouterLink to="/publication">
      <HoverEffect
        class="nav-text"
        defaultSettings="'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4"
        hoverSettings="'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4"
      >
        >>>Publication<<<
      </HoverEffect>
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-text {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
}

nav {
  padding: 1rem 0;
  background-color: var(--color-background-mute);
}

nav a {
  /* color: var(--color-background-mute); */
  display: inline-block;
}

.router-link-active {
  color: #000000; /* Change this to the color you want for the active link */
}
</style>
