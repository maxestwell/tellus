<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'
import Intro from '../components/Intro.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<template>
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <div class="intro">
      <h2>
        <Intro />
      </h2>
    </div>
  </div>
</template>

<style scoped>
.intro {
  height: 100%;
}
</style>
