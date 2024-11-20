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
  router.push({ path: '/record', query: { answer } })
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
        <div class="bcontent">
          <h2>Would you rather lose a...</h2>
        </div>
        <a class="button button1" @click="selectAnswer('a hand?!')">
          <div class="bcontent">
            <p class="choice">hand 🖐️</p>
          </div>
        </a>
        <div class="bcontent">
          <h2>or a</h2>
        </div>
        <a class="button button2" @click="selectAnswer('a foot?!')">
          <div class="bcontent">
            <p class="choice">foot 🦶</p>
          </div>
        </a>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* Full viewport height */
}

.choices {
  display: grid;
  grid-template-rows: 1fr 4fr 1fr 4fr;
  width: 100%;
  height: 100%;
}

.button {
  background-color: #04aa6d; /* Green */
  border: none;
  border-radius: 100%;
  color: white;
  /* padding: 16px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #000000;
}

.button1:hover {
  background-color: #04aa6d;
  color: white;
}

.button2 {
  background-color: white;
  color: black;
  border: 2px solid #000000;
}

.button2:hover {
  background-color: #008cba;
  color: white;
}

.bcontent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.choice {
  font-size: 48px;
}
</style>
