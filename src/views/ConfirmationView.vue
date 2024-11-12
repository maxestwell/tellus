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

  <div class="confirmation-page">
    <h1>Thank You!</h1>
    <p>Your response has been submitted to the “Would You Rather?” Archive.</p>
    <p>ALSO, here's a sticker to add to your profile!</p>
    <button @click="$router.push('/')">Return Home</button>
  </div>
</template>

<style scoped>
.question-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>

<style>
/* Retro style for buttons, frames, etc. */
</style>
