<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import Parent from '../components/AudioContainer.vue'
import Random from '../components/Random.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <header>
    <div class="title-container">
      <TheTitle :title="headerTitle" />
      <h2>Id rather loose a...</h2>
    </div>
    <TheNav />
  </header>
  <div>
    <Random />
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
}

.title-container h2 {
  margin-left: 5rem; /* Adjust the margin as needed */
}
</style>
