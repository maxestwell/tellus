<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
header {
  width: 100%;
  line-height: 1.5;
  /* max-height: 100vh; */
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
