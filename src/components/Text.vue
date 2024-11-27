<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="text-container">
    <div class="text">
      <p>Lose a</p>
      <RouterLink to="/about">
        <button>foot</button>
      </RouterLink>
      <p>or a</p>
      <RouterLink to="/about">
        <button>hand</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* global styling */

button,
p {
  font-family: 'Xanh Mono', monospace;
  font-style: normal;
  font-size: 16px;
}

button {
  font-size: 1rem;
}

.text {
  height: 100%;
  position: static;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
}
</style>
