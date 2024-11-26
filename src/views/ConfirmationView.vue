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
    <div class="confirmation">
      <div class="writing">
        <h1>Thank You!</h1>
        <p>Your response has been submitted to the “Would You Rather?” Archive.</p>
        <p>ALSO, here's a sticker to add to your profile!</p>
        <!-- <img src="/tellus/images/sticker.png" alt="Sticker" /> -->
        <div class="button-choices">
          <button @click="$router.push('/')">Return Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.confirmation {
  height: 100%;
  width: 100%;
}

.question-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

/* button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
} */
</style>
