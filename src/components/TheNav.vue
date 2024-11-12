<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/question">Submit</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
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
