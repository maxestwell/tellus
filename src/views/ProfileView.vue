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
      <h2>a_bit_intimidated</h2>
    </div>
    <TheNav />
  </header>
  <div class="about">
    <h3>
      A curated audio archive of micro-interviews based around the 'Would you rather…?' concept.
    </h3>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
}

.title-container h2 {
  margin-left: 1rem; /* Adjust the margin as needed */
}
</style>
