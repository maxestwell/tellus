<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TheNav from '@/components/TheNav.vue'
</script>

<template>
  <router-view />
  <TheNav class="nav-container" />
</template>

<style scoped>
.nav-container {
  font-size: 1.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    width: 100%;
    display: flex;
    /* place-items: flex-start; */
    justify-content: space-between;

    /* flex-wrap: wrap; */
  }

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
