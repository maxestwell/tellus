<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <header>
    <TheTitle :title="headerTitle" />
    <TheNav />
  </header>
  <div class="about">
    <h2>about</h2>
    <h3>
      A curated audio archive of micro-interviews based around the 'Would you rather…?' concept.
    </h3>
  </div>
</template>

<style scoped></style>
