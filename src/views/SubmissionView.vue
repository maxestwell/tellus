<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<!-- <script>
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
</script> -->

<template>
  <header>
    <TheTitle :title="headerTitle" />
  </header>
  <div class="submission">
    <div class="writing">
      <h1>Review Your Submission</h1>
      <p><strong>Question:</strong> Would you rather loose a hand or a foot?</p>
      <p><strong>Your Answer:</strong>{{ $route.query.answer }}</p>
      <div class="button-choices">
        <button @click="$router.push('/record')">Go Back</button>
        <button @click="submitResponse">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.submission {
  height: 100%;
  width: 100%;
}
</style>
