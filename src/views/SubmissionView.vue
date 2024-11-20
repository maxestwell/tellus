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
  <div class="views">
    <div class="submission-page">
      <h1>Review Your Submission</h1>
      <p><strong>Question:</strong> Would you rather loose a hand or a foot?</p>
      <p><strong>Your Answer:</strong> {{ $route.query.answer }}</p>
      <p><strong>Uploaded File:</strong> {{ file?.name || 'No file uploaded' }}</p>
      <button @click="submitResponse">Submit</button>
      <button @click="$router.push('/record')">Go Back</button>
    </div>
  </div>
</template>

<style scoped></style>
