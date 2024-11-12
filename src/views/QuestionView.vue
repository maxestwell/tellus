<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')
const router = useRouter()

onMounted(() => {
  headerTitle.value = 'Tellus'
})

const selectAnswer = (answer) => {
  router.push({ path: '/upload', query: { answer } })
}
</script>

<template>
  <header>
    <TheTitle :title="headerTitle" />
    <TheNav />
  </header>

  <div class="question-page">
    <h1>The Current Question</h1>
    <h3>Would you rather loose a hand or a foot?</h3>
    <div class="choices">
      <button @click="selectAnswer('a hand?!')">hand 🖐️</button>
      <button @click="selectAnswer('a foot?!')">foot 🦶</button>
    </div>
  </div>
</template>

<style scoped>
.question-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  /* text-align: center; */
}

.choices {
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
}

.choices div {
  cursor: pointer;
  transition: transform 0.2s;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.option1 {
  background-color: #007bff;
}

.option2 {
  background-color: #28a745;
}
</style>
