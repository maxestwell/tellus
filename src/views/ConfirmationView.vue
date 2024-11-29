<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TheTitle from '../components/TheTitle.vue'

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
  </header>
  <div class="writing">
    <h1>Thank You!</h1>
    <p>Your response has been submitted to the “Would You Rather?” Archive.</p>
    <p>ALSO, here's a sticker to add to your profile!</p>
    <!-- <img src="/tellus/images/sticker.png" alt="Sticker" /> -->
    <div class="button-choices">
      <button @click="$router.push('/')">Return Home</button>
    </div>
  </div>
</template>
