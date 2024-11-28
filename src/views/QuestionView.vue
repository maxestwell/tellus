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
  <header>
    <TheTitle :title="headerTitle" />
    <TheNav />
  </header>
  <div class="question-container">
    <div class="question-page">
      <div class="writing">
        <h1>Would you rather lose a...</h1>
      </div>
      <div class="choices">
        <a class="button button1" @click="selectAnswer('a hand?!')">
          <div class="bcontent">
            <h1 class="choice">hand</h1>
          </div>
        </a>
        <div class="bcontent">
          <h2>or a</h2>
        </div>
        <a class="button button2" @click="selectAnswer('a foot?!')">
          <div class="bcontent">
            <h1 class="choice">foot</h1>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.writing {
  padding: 0;
}

.question-container {
  flex: 1;
  display: flex;
  width: 100%;
  padding: 1em;
}

.question-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.choices {
  display: grid;
  grid-template-rows: 4fr 1fr 4fr;
  width: 100%;
  height: 100%;
}

.button {
  background-color: #04aa6d; /* Green */
  border: none;
  /* border-radius: 100%; */
  color: white;
  /* padding: 16px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #000000;
}

.button1:hover,
.button2:hover {
  background-color: #0033ff;
  color: white;
}

.button2 {
  background-color: #f2f2f2;
  color: black;
  border: 2px solid #000000;
}

.bcontent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

/* .choice {
  font-size: 48px;
} */
</style>
