<script setup>
import HoverEffect from '@/components/HoverEffect.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/question">
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
</style>
