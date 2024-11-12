<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import TheWelcome from '../components/TheWelcome.vue'

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
  <div>
    <TheWelcome />
  </div>
</template>

<style scoped></style>
