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
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <div class="about">
      <div class="writing">
        <h1>What is Tellus?</h1>
        <p>
          Tellus began as an idea pitched by a University of Canberra academic during a study tour
          in Finland as part of a group university project.
        </p>
        <p>The idea stuck with me...</p>
        <p>
          It evolved into a curated audio archive of micro-interviews based on the 'Would you
          rather…?' concept, blending creativity and public engagement. The platform invites users
          to share their own responses for future editions, drawing on the Vox Pop tradition to
          explore a mix of thought-provoking, lighthearted, and reflective questions.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  height: 100%;
  width: 100%;
}
</style>
