<script setup>
import { ref, onMounted } from 'vue'
import TheTitle from '../components/TheTitle.vue'
import TheNav from '../components/TheNav.vue'

const headerTitle = ref('Default Title')

onMounted(() => {
  headerTitle.value = 'Tellus'
})
</script>

<script>
export default {
  name: 'RecordPage',
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
  <header>
    <TheTitle :title="headerTitle" />
  </header>
  <div class="writing">
    <h1>Record Your Response</h1>
    <p>{{ $route.query.answer }}</p>
    <div class="button-choices">
      <button>record</button>
      <button @click="goToSubmit">next</button>
    </div>
  </div>
</template>

<style scoped></style>
