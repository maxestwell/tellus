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
</script>

<script>
export default {
  name: 'UploadPage',
  data() {
    return {
      file: null,
    }
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0]
    },
    goToSubmit() {
      this.$router.push({ path: '/submit', query: { answer: this.$route.query.answer } })
    },
  },
}
</script>

<template>
  <div class="views">
    <header>
      <TheTitle :title="headerTitle" />
      <TheNav />
    </header>

    <div class="upload-page">
      <h1>Upload Your Response</h1>
      <p>Your answer: {{ $route.query.answer }}</p>
      <input type="file" @change="handleFileUpload" accept="audio/*, text/plain" />
      <button :disabled="!file" @click="goToSubmit">Next</button>
    </div>
  </div>
</template>

<style scoped></style>

<style>
/* Retro style for buttons, frames, etc. */
</style>
