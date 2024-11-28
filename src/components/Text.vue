<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="text-container">
    <div class="text">
      <p>Lose a</p>
      <RouterLink class="button" to="/about">hand</RouterLink>
      <p>or a</p>
      <RouterLink class="button" to="/about">foot</RouterLink>
      <p>?</p>
    </div>
  </div>
</template>

<style scoped>
p,
a {
  font-size: 1.5rem;
}

.button {
  background-color: #efefef;
  color: var(--vt-c-black);
  padding: 1px 6px;
  outline: 1px solid #666666;
  border-radius: 2px;
  cursor: pointer;
  font-family: 'sigurd-variable', sans-serif;
  font-variation-settings:
    'wght' 300,
    'slnt' 0;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

/* .text {
  display: inline-flex;
} */
</style>
