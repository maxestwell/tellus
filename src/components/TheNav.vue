<script setup>
import HoverEffect from '@/components/HoverEffect.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (paths) => {
  return paths.includes(route.path)
}
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink
        to="/question"
        :class="{
          'router-link-active': isActiveRoute(['/question', '/record', '/submit', '/confirmation']),
        }"
      >
        <HoverEffect
          defaultSettings="'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4"
          hoverSettings="'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4"
        >
          Submit
        </HoverEffect>
      </RouterLink>
      <RouterLink to="/about">
        <HoverEffect
          defaultSettings="'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4"
          hoverSettings="'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4"
        >
          About
        </HoverEffect>
      </RouterLink>
      <RouterLink to="/publication">
        <HoverEffect
          defaultSettings="'wght' 700, 'BACK' 0, 'RECT' 0, 'ELSH' 4"
          hoverSettings="'wght' 500, 'BACK' 700, 'RECT' 700, 'ELSH' 4"
        >
          >>>Publication<<<
        </HoverEffect>
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  align-items: flex-end;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

.router-link-active {
  color: #000000; /* Change this to the color you want for the active link */
}
</style>
