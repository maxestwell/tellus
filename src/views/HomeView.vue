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
    </div>
    <TheNav />
  </header>
  <div>
    <h2>I'd rather loose a...</h2>
    <Random />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
