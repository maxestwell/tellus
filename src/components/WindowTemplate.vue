<script setup>
import TheTitle from '@/components/TheTitle.vue'
import WindowScript from '@/components/WindowScript.vue'
</script>

<template>
  <WindowScript>
    <template #window-1>
      <h1 class="flexe">Welcome to <TheTitle title="Tellus" /></h1>
    </template>

    <template #window-2>
      <h1>This website invites you to explore the "Would you rather" question.</h1>
    </template>

    <template #window-3>
      <h1>So...</h1>
    </template>

    <template #window-4>
      <h1>Would you rather</h1>
    </template>
  </WindowScript>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Xanh Mono', monospace;
}
.flexe {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

h1 > div {
  text-transform: capitalize;
}
</style>
