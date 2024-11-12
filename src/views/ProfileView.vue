<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'T'
})
</script>

<template>
  <header>
    <div class="title-container">
      <TheTitle :title="headerTitle" />
    </div>
    <TheNav />
  </header>
  <div class="about">
    <h2>@a_bit_intimidated</h2>
    <h3>bio</h3>
    <p>
      exploring the vast, digital unknown. Somewhere between the chaos of dial-up and the promise of
      something bigger.
    </p>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

h2 {
  font-family: 'gridlite-pe-variable', sans-serif;
  font-variation-settings:
    'wght' 700,
    'BACK' 0,
    'RECT' 0,
    'ELSH' 4;
  font-size: 1.5rem;
  margin: 0;
}
</style>
