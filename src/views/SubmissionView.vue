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
  name: 'SubmissionPage',
  data() {
    return {
      file: null,
    }
  },
  mounted() {
    this.file = this.$route.query.file // Access the file if needed
  },
  methods: {
    submitResponse() {
      // Implement actual file upload or API submission here
      this.$router.push('/confirmation')
    },
  },
}
</script>

<template>
  <header>
    <TheTitle :title="headerTitle" />
    <TheNav />
  </header>

  <div class="submission-page">
    <h1>Review Your Submission</h1>
    <p>
      <strong>Question:</strong> Would you rather experience the 90s internet forever or the 2000s
      internet forever?
    </p>
    <p><strong>Your Answer:</strong> {{ $route.query.answer }}</p>
    <p><strong>Uploaded File:</strong> {{ file?.name || 'No file uploaded' }}</p>
    <button @click="submitResponse">Submit</button>
    <button @click="$router.push('/upload')">Go Back</button>
  </div>
</template>

<style scoped></style>
