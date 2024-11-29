<script setup>
import TheTitle from '@/components/TheTitle.vue'
import WindowScript from '@/components/WindowScript.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const selectAnswer = (answer) => {
  router.push({ path: '/record', query: { answer } })
}
</script>

<template>
  <WindowScript>
    <template v-slot:window-1>
      <h1>Welcome to Tellus</h1>
    </template>
    <template v-slot:window-2>
      <h1>This website invites you to explore the "Would You Rather" concept.</h1>
    </template>
    <template v-slot:window-3>
      <h1>So...</h1>
    </template>
    <template v-slot:window-4>
      <h1>Would you rather...</h1>
    </template>
  </WindowScript>
</template>

<style scoped>
h1 {
  font-size: 1rem;
  text-transform: uppercase;
}

p,
.text button {
  font-size: 1rem;
}
</style>
