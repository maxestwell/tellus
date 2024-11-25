<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Publication'
})
</script>

<template>
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <div class="publication">
      <div class="writing">
        <h1>Title of Publication</h1>
        <p>Tellus</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.publication {
  height: 100%;
  width: 100%;
}
</style>
