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
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>
    <div class="question-page">
      <div class="choices">
        <div>
          <h3>Would you rather lose a...</h3>
        </div>
        <button @click="selectAnswer('a hand?!')">hand 🖐️</button>
        <div>
          <h3>or a</h3>
        </div>
        <button @click="selectAnswer('a foot?!')">foot 🦶</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.views {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.question-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* text-align: center; */
}

.choices {
  display: grid;
  grid-template-rows: 1fr 4fr 1fr 4fr;
  width: 100%;
  height: 100%;
}

.choices div {
  cursor: pointer;
  transition: transform 0.2s;
  /* padding: 10px 20px; */
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
